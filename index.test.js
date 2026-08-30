const mcode = require('./index');
const packageJson = require('./package.json');
const cachePackageJson = require('mcode-cache/package.json');
// {AIN-2026-08-26:GPT-5.6 Sol} -- package tests need npm's real artifact selection
const path = require('path');
const {execFileSync} = require('child_process');

// {AIN-2026-08-26:GPT-5.6 Sol} -- clean consumers must prove the cache facade survives bundling
describe('mcode-package: package smoke', () =>
{
    it('loads the versioned package and scoped cache export', () =>
    {
        expect(packageJson.version).toBe('0.9.1');
        expect(cachePackageJson.version).toBe('0.9.0');
        expect(typeof mcode.addNamespace).toBe('function');
        expect(mcode.redisMinimumVersion).toBe('8.4.0');
        expect(Object.isFrozen(mcode.redisStatus)).toBe(true);

        const handle = mcode.addNamespace({name: 'PackageSmoke', type: 'node'});

        expect(Object.isFrozen(handle)).toBe(true);
        expect(handle.name).toBe('PackageSmoke');
        expect(handle.type).toBe('node');
        expect(typeof handle.ready).toBe('function');
        expect(() => handle.status).not.toThrow();
        expect(handle.status).toBe(mcode.redisStatus.CONNECTED);
    });
});

// {AIN-2026-08-26:GPT-5.6 Sol} -- partial cache facades hide mandatory load failures
describe('mcode-package: mandatory package load', () =>
{
    it('logs and rethrows the original mcode-cache load error', () =>
    {
        const loadError = new Error('mcode-cache failed during initialization');
        loadError.code = 'MODULE_NOT_FOUND';

        jest.isolateModules(() =>
        {
            const log = require('mcode-log');
            const logSpy = jest.spyOn(log, 'exp').mockImplementation(() => undefined);
            jest.doMock('mcode-cache', () =>
            {
                throw loadError;
            });
            let thrown;

            try
            {
                require('./index');
            }
            catch (error)
            {
                thrown = error;
            }

            expect(thrown).toBe(loadError);
            expect(logSpy).toHaveBeenCalledWith(
                'mcode-cache failed to load.',
                'mcode-package.js',
                loadError
            );
            logSpy.mockRestore();
        });
        jest.dontMock('mcode-cache');
    });
});

// {AIN-2026-08-26:GPT-5.6 Sol} -- publish artifacts must exclude private workspace files
describe('mcode-package: package artifact', () =>
{
    it('packs only declared runtime and API artifacts', () =>
    {
        const npmCLI = process.env.npm_execpath ||
            path.join(path.dirname(process.execPath), 'node_modules', 'npm', 'bin', 'npm-cli.js');
        const output = execFileSync(process.execPath, [
            npmCLI,
            'pack',
            '--dry-run',
            '--json'
        ], {
            cwd: __dirname,
            encoding: 'utf8'
        });
        const packResult = JSON.parse(output)[0];
        const packedFiles = packResult.files.map(file => file.path);
        const allowedTopLevel = new Set([
            'bootstrap.js',
            'examples.js',
            'index.js',
            'LICENSE',
            'package.json',
            'README.md'
        ]);

        expect(packedFiles).toEqual(expect.arrayContaining([
            'index.js',
            'bootstrap.js',
            'examples.js',
            'package.json',
            'README.md',
            'LICENSE',
            'docs/index.html',
            'docs/index.js.html',
            'docs/mcode.module__mcode-package.js_-mcode.html',
            'docs/mcode.module__mcode-package.js_.html'
        ]));
        expect(packedFiles.every(file =>
            allowedTopLevel.has(file) || file.startsWith('docs/'))).toBe(true);
        expect(packedFiles).not.toEqual(expect.arrayContaining([
            '.env.phase',
            'index.test.js',
            'jsdocs.json',
            'mcode-package.code-workspace'
        ]));
        expect(packedFiles.some(file => file.startsWith('.github/'))).toBe(false);
        expect(packedFiles.some(file => file.endsWith('.test.js'))).toBe(false);
    });
});
