// #region  F I L E
// <copyright file="mcode-list/index.js" company="MicroCODE Incorporated">Copyright © 2022-2024 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  M O D U L E
// #region  D O C U M E N T A T I O N
/**
 *      Project:  MicroCODE MERN Applications
 *      Customer: Internal + MIT xPRO Course
 *      @module   'mcode-package.js'
 *      @memberof mcode
 *      @created  January 2022-2024
 *      @author   Timothy McGuire, MicroCODE, Inc.
 *      @description >
 *      MicroCODE NPM Package 'Bundler'
 *
 *      LICENSE:
 *      --------
 *      MIT License: MicroCODE.mcode-list
 *
 *      Copyright (c) 2022-2024 Timothy McGuire, MicroCODE, Inc.
 *
 *      Permission is hereby granted, free of charge, to any person obtaining a copy
 *      of this software and associated documentation files (the "Software"), to deal
 *      in the Software without restriction, including without limitation the rights
 *      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *      copies of the Software, and to permit persons to whom the Software is
 *      furnished to do so, subject to the following conditions:
 *
 *      The above copyright notice and this permission notice shall be included in all
 *      copies or substantial portions of the Software.
 *
 *      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *      SOFTWARE.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *      This module implements the MicroCODE's Common JavaScript Package 'Bundler'.
 *
 *
 *      REFERENCES:
 *      -----------
 *      1. MIT xPRO Course: Professional Certificate in Coding: Full Stack Development with MERN
 *
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *      Date:         By-Group:   Rev:    Description:
 *
 *      30-Jan-2024   TJM-MCODE  {0001}   New module to house all our public MicroCODE packages.
 *      01-Feb-2024   TJM-MCODE  {0002}   Changed to the Universal Module Definition (UMD) pattern to support AMD,
 *                                        CommonJS/Node.js, and browser global in our exported module.
 *      28-Jun-2024   TJM-MCODE  {0003}   Added 'mcode-data' package to the list of MicroCODE packages.
 *      28-Aug-2024   TJM-MCODE  {0004}   Added 'mcode-cache' package to the list of MicroCODE packages.
 *      29-Aug-2024   TJM-MCODE  {0005}   Changed 'mcode' package merge to get all methods and properties (get/set).
 *
 *
 *
 *
 * NOTE: This module follow's MicroCODE's JavaScript Style Guide and Template JS file, see:
 *
 *       o  https://github.com/MicroCODEIncorporated/JavaScriptSG
 *       o  https://github.com/MicroCODEIncorporated/TemplatesJS
 *
 */

// #endregion

// #region  I M P O R T S

const log = require('mcode-log');
const packageJson = require('./package.json');

// #endregion

// #region  T Y P E S

// #endregion

// #region  I N T E R F A C E S

// #endregion

// #region  C O N S T A N T S

// MicroCODE: define this module's name for our 'mcode-log' package
const MODULE_NAME = 'mcode-package.js';

/**
 * @namespace mcode
 * @desc mcode namespace containing functions and constants.
 */
const mcode = {

};

// L O A D   A L L   M C O D E   P A C K A G E S...

// Load: M C O D E - L O G
try
{
    const mcodeLog = require('mcode-log');
    const mcodeLogJson = require('mcode-log/package.json');

    // Assign all methods and properties to mcode, preserving getters and setters
    Object.defineProperties(mcode, Object.getOwnPropertyDescriptors(mcodeLog));

    log.success(`MicroCODE 'mcode-package' v${packageJson.version} - loaded package: 'mcode-log' v${mcodeLogJson.version} `, MODULE_NAME);
}
catch (exp)
{
    // mcode-log is not installed - OPTIONAL, no error thrown
}

// Load: M C O D E - L I S T
try
{
    const mcodeList = require('mcode-list');
    const mcodeListJson = require('mcode-list/package.json');

    // Assign all methods and properties to mcode, preserving getters and setters
    Object.defineProperties(mcode, Object.getOwnPropertyDescriptors(mcodeList));

    log.success(`MicroCODE 'mcode-package' v${packageJson.version} - loaded package: 'mcode-list' v${mcodeListJson.version} `, MODULE_NAME);
}
catch (exp)
{
    // mcode-list is not installed - OPTIONAL, no error thrown
}

// Load: M C O D E - D A T A
try
{
    const mcodeData = require('mcode-data');
    const mcodeDataJson = require('mcode-data/package.json');

    // Assign all methods and properties to mcode, preserving getters and setters
    Object.defineProperties(mcode, Object.getOwnPropertyDescriptors(mcodeData));

    log.success(`MicroCODE 'mcode-package' v${packageJson.version} - loaded package: 'mcode-data' v${mcodeDataJson.version} `, MODULE_NAME);
}
catch (exp)
{
    // mcode-list is not installed - OPTIONAL, no error thrown
}

// Load: M C O D E - C A C H E
try
{
    const mcodeCache = require('mcode-cache');
    const mcodeCacheJson = require('mcode-cache/package.json');

    // Assign all methods and properties to mcode, preserving getters and setters
    Object.defineProperties(mcode, Object.getOwnPropertyDescriptors(mcodeCache));

    log.success(`MicroCODE 'mcode-package' v${packageJson.version} - loaded package: 'mcode-cache' v${mcodeCacheJson.version} `, MODULE_NAME);
}
catch (exp)
{
    // mcode-cache is not installed - OPTIONAL, no error thrown
    mcode.exp('mcode-cache failed to load.', MODULE_NAME, exp);
}

// #endregion

// #region  M E T H O D - E X P O R T S

// Immediately Invoked Function Expression (IIFE) invoked on 'this' which
// represents the global object(window in a browser, global in Node.js).
// This IIFE returns the 'mcode' object to be assigned to the global object.
// The Universal Module Definition (UMD) pattern supports Asynchronous Module Definition (AMD),
// CommonJS / Node.js, and Browser 'global' usage.
(
    /**
     * @function (IIFE)
     * @description Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, and browser global
     * @param {any} root the global object (window, self, global, etc.) being updated.
     * @param {any} factory a function that returns the exports of the module. This function is invoked in
     * the context of the global object when the module is loaded. The return value of this function is used
     * as the exported value of the module when it's not being used with AMD or Node.js module systems.
     * This function is where you define what your module exports.
     */
    function (root, factory)
    {
        if (typeof define === 'function' && define.amd)
        {
            // AMD. Register as an anonymous module.
            define([], factory);
        }
        else if (typeof module === 'object' && module.exports)
        {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like environments that support module.exports, like Node.
            module.exports = factory();
        }
        else
        {
            // Browser globals (root is 'window')
            root.mcode = factory();
        }

    }(  // root: the global object (window, self, global, etc.)
        (typeof self !== 'undefined') ? self : this,

        // factory: a function that returns the exports of the module
        function () {return mcode;})
);

// #endregion

// #endregion
// #endregion