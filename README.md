# MicroCODE's 'mcode-package' collection
A public NPM Packaging of our internal app construction packages: mcode-log, mcode-list, etc.

These are an extremely 'light weight' packages with *zero dependencies* that can be collected together into a single namespace called 'mcode.' for invocation.

These utilities are identical on both...

* **Frontend** - Browser Client side
* **Backend** - Node Server side


## Description

This is our internal app construction code. These are the tools we use continuously to build robust '24x7x365'code.
The current packages bundled by this are:

* **mcode-data** - provides an consistent set of functions for data testing and conversion chores.
* **mcode-log** - provides an consistent set of functions for logging events into any console, with severity and colorization.
* **mcode-list** - provides an consistent set of functions for handling list processing chores.
* **mcode-cache** - provides an simple, consistent set of functions for caching files, keys, or database records using Redis.


## Dependencies

* **Production**
1) _None_
2) mcode-data (optional)
3) mcode-log (optional)
4) mcode-list (optional)
5) mcode-cache (optional)

* **Development**
1) Node.JS - standard runtime environment
2) JSDocs - our preferred JavaScript documentation system
3) Jest.JS - our preferred JavaScript testing framework


## Installing

Use "npm install" to install the 'bundler' and then all required MicroCODE packages.

* Get to a terminal session in the local repo folder of your project.
* Use 'npm install' to load the package(s)...

```
npm install mcode-package
npm install mcode-data
npm install mcode-log
npm install mcode-list
npm install mcode-cache
...
```

## mcode-package (NPM 'Bundling')

This is a console log to demonstrate how the **mcode.data**, **mcode.log**, **mcode.list** and **mcode-cache** NPM packages are brought together under a single 'mcode' object...

* This shows 'mcode' as logged by its own function '**mcode.debug()**'...

<p align="left"><img src=".\.github\images\mcode-package-loggedview.png" width="720" title="mcode as logged..."></p>

* Notice how the functions from '**mcode-log**' and '**mcode-list**' are all present under '**mcode.***' as if they came from a single NPM package, e.g.: **swap()** and **list()** are from 'mcode-list' and the reset are from 'mcode-log'...

<p align="left"><img src=".\.github\images\mcode-package-functions.png" width="720" title="mcode functions..."></p>


### Testing

This package includes a simple test/demog module: **index.test.js**. running it direclty will show you all the 'log' and 'exp' formatting that occurs into the console and the recursive destruction of objects when they are logged.

* From your project directory...
```
node .\node_modules\mcode-log\examples
```
...you should see the 'severities' example shown earlier in this README.

* To test with **JEST**:
* From the **mcode-log** package directory...
```
npm install --save-dev jest
npm test
```

* A view of the JEST tests (for 'mcode-log') in the console...

<p align="left"><img src=".\.github\images\mcode-log-jest.png" width="720" title="Jest Results..."></p>


## Available Packages

These are the functions we want at the ready in any module for development and debug.

| Function	         | Description                                                 | Usage                     |
|--------------------|-------------------------------------------------------------|---------------------------|
| **mcode-data**     | A collection of data handling functions and utilities       | mcode.isObject(), mcode.listifyArray(), mcode.octify(), etc.
| **mcode-log**      | A collection of event logging functions and utilities       | mcode.log(), mcode.warn(), mcode.exp(), etc.
| **mcode-list**     | A collection of list processing fucntions and utilities     | mcode.swap(), mcode.call(), mcode.add(), etc.
| **mcode-cache**    | A collection of data caching fucntions and utilities        | mcode.fileRead(), mcode.redisGet(), mcode.redisSet(), etc.


### Documentation

We believe is explicit code documentation, for other users, and for our 'future selves'.<br>
JSDocs is a standardized system for documenting functions and data structures that produces three (3) primary outputs:

1) Inline documentation for the coder.
2) Intellisense popup documentation for the coder for every function.
3) External 'reference manual' documentation for your entire code base, if used consistently.

* This entire project--like all our projects--is documented with **JSDocs**.

* To install JSDocs use, get to a terminal session in the project folder...
```
npm install --save-dev jsdoc
```
* Configure JSDoc processing in...
```
jsdoc.json
```
* To regenerate the JSDocs from all source code, use the following command (from the project root directory)...
```
jsdoc -c .jsdoc.json
```

...then open ./docs/index.html

<p align="left"><img src=".\.github\images\mcode-log-jsdocs.png" width="720" title="JSDocs..."></p>


## Help

Contact Timothy McGuire, support@mcode.com.


## Terminology

| Word or Acronym	| Description/Definition                                |
|-------------------|-------------------------------------------------------|
|  **NPM**	        | Node Package Manager, actually “Node PM”, “Node pkgmakeinst” a system to deploy, install, and maintain NodeJS Apps. (PM was a BASH utility).
|  **NVM**	        | Node Version Manager, a tool that supports changing NodeJS versions.
|  **MERN**         | MongoDB, Express, React, Node JS.
|  **MongoDB**      | A ‘NoSQL’ database designed for Cloud applications, also referred to as a ‘Document Store’.
|  **Express**      | Express is *not* a database but rather an ‘extensible routing language’ for communication between a Client and a Server.
|  **React**        | A Web UI development system, a JavaScript library developed by Facebook and made public—and Open Source—since 2013.
|  **Node JS**      | A development stack that executes from a local file store—on a local Server—instead of from a network of servers.
|  **JSDocs**       | A toolset to automatically generate API-style documentation from source code tagging.


## Authors

Contributor's names and contact info...

* Timothy McGuire [@TimothyMcGuire](https://twitter.com/TimothyMcGuire) - Founder, President-CEO of MicroCODE, Inc. a software and controls engineering company in Detroit, Michigan USA.


## Version History

* v0.6.8
    - upgraded to mcode-data v0.5.8, mcode-log v0.5.8, mcode-list v0.5.8, and mcode-cache v0.6.8
* v0.6.2
    - upgraded to mcode-data v0.5.5, mcode-log v0.5.5, mcode-list v0.5.5, and mcode-cache v0.6.2
* v0.6.1
    - Missed mcode-cache v0.6.0, arrrggh.
* v0.6.0
    - Updated mcode-data, mcode-log, mcode-list and mcode-cache.
    - The updated to mcode-cache is a BREAKING CHANGE because it now support multiple caches
      node-cache and redis *at the same time* for different App needs. This changed some existing
      functions named 'redis*' to 'cache*' to become agnostic.
* v0.5.0 - 0.5.3
    - All 'mcode-*' packages updated with 'ready()' only implemented in 'mcode-log'.
    - Added internal 'mcode-cache' package.
* v0.4.2
    - Added mcode-cache and updated to latest log, data, and list.
* v0.4.1
    - Synchronized mcode-data, mcode-log, mcode-list, mcode-package.
* v0.4.0
    - Synchronized mcode-data, mcode-log, mcode-list, mcode-package.
* v0.3.8
    - Moved all data handling functions into new mcode-data package.
* v0.3.0
    - Upgrade 'mcode-log' to v0.3.0
    - Upgrade 'mcode-list' to v0.3.0
* v0.2.6
    - Upgrade 'mcode-log' to v0.2.6
* v0.2.5
    - Upgrade 'mcode-log' to v0.2.5
* v0.2.4
    - Upgrade 'mcode-log' to v0.2.4
* v0.2.2
    - Upgrade 'mcode-log' to v0.2.2
* v0.2.1
    - Upgrade 'mcode-log' to v0.2.1
* v0.2.0
    - Upgrade 'mcode-log' to v0.2.0, sync'ed package versions to v0.2.0
* v0.1.11
    - upgraded to 'mcode-log' v0.1.18
* v0.1.10
    - upgraded to 'mcode-log' v0.1.17
* v0.1.9
    - upgraded to 'mcode-log' v0.1.16
* v0.1.8
    - Added the display of sub-package versions on load.
* v0.1.7
    - Improved README examples, corrected typos.
* v0.1.6
    - Changed export to the Univeral Module Defintion (UMD) pattern.
* v0.1.0 * v0.1.5
    - Rewrote code to load all functions and elements from an included mcode-* package into 'mcode.*'.
    - Removed the need to update this package with explicit references when features are added to a bundled package.
* v0.0.8
    - Upgraded to 'mcode-log' v0.1.8
* v0.0.6 * v0.0.7
    - Updated README with pictures illustrating how 'mcode-package' brings togther other MicroCODE packages under 'mcode.*'.
* v0.0.5
    - Upgraded to 'mcode-log' v0.1.5
* v0.0.3 * v0.0.4
    - Corrected JSDocs and Jest to DEV ONLY dependencies
* v0.0.2
    - Published to NPM
* v0.0.1
    - Initial movement of our internal code into an NPM bundled packages for ease of use in other projects.

## Future Development

* v0.0.*
    - Any additional core code we development for general JavaScript MERN coding, debug, and support.


## License

This project is licensed under the MIT License - see the LICENSE.md file for details


## MicroCODE Mantra

MicroCODE, Inc. was founded in 1987 as a controls engineering and software development company.<br>
We specialize in manufacturing and quality control applications that must run 24x7x365 for years at a time.

Our slogan, distilled from over three decades of developing, testing, installing, and supporting 24x7x365 manufacturing applications, is..

<p align="left"><img src=".\.github\images\hail-caesar.png" width="720" title="Hail Caesar!"></p>
