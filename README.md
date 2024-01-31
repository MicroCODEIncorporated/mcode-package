# MicroCODE's 'mcode-package' collection
A public NPM Packaging of our internal app construction packages: mcode-log, mcode-list, etc.

These are an extremely 'light weight' packages with *zero dependencies* that can be collected together into a single namespace called 'mcode.' for invocation.

These utilities are identical on both...

* **Frontend** - Browser Client side
* **Backend** - Node Server side


## Description

This is our internal app construction code. These are the tools we use continuously to build robust '24x7x365'code.
The current packages bundled by this are:

* **mcode-log** - provides an consistent set of functions for logging events into any console, with severity.
* **mcode-list** - provides an consistent set of function for handling list processing chores.


## Dependencies

* **Production**
1) _None_

* **Development**
1) Node.JS - standard runtime environment
2) JSDocs - our preferred JavaScript documentation system
3) Jest.JS - our preferred JavaScript testing framework


## mcode-log

This is an example of each **mcode.log()**, **mcode.warn(),** and **mcode.exp()** event severity supported by the package...

* JavaScript calls... (see **mcode-log-examples.js**)

<p align="left"><img src=".\.github\images\mcode-log-calls.png" width="720" title="Call examples..."></p>

* Example of the differing severities in the console output...

<p align="left"><img src=".\.github\images\mcode-log-severity.png" width="720" title="Event Severities..."></p>


## Installing

* Use "npm install" to install the 'bundler' and then all required MicroCODE packages...
```
npm install mcode-package
npm install mcode-log
npm install mcode-list
...
```

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

* A view of the JEST tests in the console...

<p align="left"><img src=".\.github\images\mcode-log-jest.png" width="720" title="Jest Results..."></p>



## Available Packages

These are the functions we want at the ready in any module for development and debug.

| Function	         | Description                                                 | Usage                     |
|--------------------|-------------------------------------------------------------|---------------------------|
| **mcode-log**      | A collection of event logging functions and utilities       | mcode.log(), mcode.warn(), mcode.exp(), etc.
| **mcode-list**     | A collection of list processing fucntions and utilities     | mcode.swap(), mcode.call(), mcode.add(), etc.


### Documentation

* This entire project is documented with **JSDocs**

* To install JSDocs use...
```
npm install --save-dev jsdoc
```
* Configure JSDoc processing in...
```
jsdoc.conf.json
```
* To regenerate the JSDocs from all source code use (from project root directory)...
```
jsdoc -c .jsdoc.conf.json
```

...then open ./docs/index.html

<p align="left"><img src=".\.github\images\mcode-log-jsdocs.png" width="720" title="JSDocs..."></p>


## Help

Contact Timothy McGuire, support@mcode.com.


## Terminology

| Word or Acronym	| Description/Definition                                |
|-------------------|-------------------------------------------------------|
|  **NPM**	        | Node Package Manager, actually “Node PM”, “Node pkgmakeinst” a system to deploy, install, and maintain NodeJS Apps. (PM was a BASH utility).
|  **NVM**	        | Node Version Manager, a tool that support changing NodeJS versions.
|  **MERN**         | MongoDB, Express, React, Node JS.
|  **MongoDB**      | A ‘NoSQL’ database designed for Cloud applications, also referred to as a ‘Document Store’.
|  **Express**      | Express is *not* a database but rather an ‘extensible routing language’ for communication between a Client and a Server.
|  **React**        | A Web UI development system, a JavaScript library developed by Facebook and made public—and Open Source—since 2013.
|  **Node JS**      | A development stack that executes from a local file store—on a local Server—instead of from a network of |  **JSDocs**           | A toolset to automatically generate API-style documentation from source tagging.


## Authors

Contributors names and contact info...

* Timothy J McGuire [@TimothyMcGuire](https://twitter.com/TimothyMcGuire)


## Version History

* 0.0.1
    * Initial movement of our internal code into an NPM bundled packages for ease of use in other projects.

## Future Development

* 0.0.*
    * ESM and CJS packaging.
* 0.0.*
    * Any additional core code we development for general JavaScript MERN coding, debug, and support.


## License

This project is licensed under the MIT License - see the LICENSE.md file for details


## MicroCODE Mantra

Our slogan mark, distilled from over three decades of developing, testing, installing, and supporting 24x7x365
manufacturing applications...

<p align="left"><img src=".\.github\images\hail-caesar.png" width="720" title="Hail Caesar!"></p>