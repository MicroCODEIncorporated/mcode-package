// #region  F I L E
// <copyright file="mcode-list/index.js" company="MicroCODE Incorporated">Copyright © 2022-2024 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  M O D U L E
// #region  D O C U M E N T A T I O N
/**
 *      Project:  MicroCODE MERN Applications
 *      Customer: Internal + MIT xPRO Course
 *      @module   'bootstrap.js'
 *      @memberof mcode
 *      @created  January 2022-2024
 *      @author   Timothy McGuire, MicroCODE, Inc.
 *      @description >
 *      Loads the absolute minimum set of modules needed to run a MicroCODE Web App.
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
 *      This module implements the core functionality required for the application to initialize and load necessary components.
 *      It sets up the environment, loads configuration files, and initializes the MicroCODE package.
 *
 *      This module must be the very first thing imported (loaded) in any Web App's 'server.js'.
 *
 *
 *      TO USE:
 *      -------
 *      in our 'server.js', as the very first line of code, add...
 *
 *      // MicroCODE Web App Bootstrap...
 *       require('./bootstrap.js');
 *
 *      ...from that point forward you can use all the MicroCODE pakacges you have installed thru the global:
 *
 *      mcode.*     e.g.: mcode.Log(), mcode.warn(), mcode.success(), mcode.swap(), etc.
 *
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
 *      30-Jan-2024   TJM-MCODE  {0001}   New module to bootstrap all our public MicroCODE packages as a bare minimum App launch.
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

// #region  G L O B A L S

console.log('');
console.log('[BOOTSTRAP] Loading minimum web app environment...');

const path = require('path');

// show NODE the location of our project's Config files
process.env["NODE_CONFIG_DIR"] = path.resolve(__dirname, './cfg/');

// Load the NODE environment dynamically based on NODE_ENV
global.dotenv = require('dotenv');
global.envMode = process.env.NODE_ENV; // The environment mode (based on NODE_ENV)
global.envFile = __dirname.includes('.dist') ? path.resolve(__dirname, '.env') : path.resolve(__dirname, `.env.${envMode}`);
global.dotenv.config({path: envFile});

// Load your JavaScript extensions
//~ require('.../prototypes.js');

// Make the MicroCODE package available globally, from a single read-only object
global.mcode = require('mcode-package');  // MicroCODE's packages: mcode-data, mcode-log, mcode-list, ncode-cache, etc.

global.dirBase = __dirname; // process.env.SERVER_DIR; // The base directory of the Server (based on ENV MODE)
global.urlBase = process.env.SERVER_URL; // The base URL for the Server

// #endregion

// #region  C O N S T A N T S

// Define this module's name for the 'mcode.log' package and documentation
const MODULE_NAME = 'bootstrap.js';

// #endregion

// #region  M E T H O D S

// log what we're working with...
mcode.info({

    source: MODULE_NAME,
    envMode: envMode,
    envFile: envFile,
    dirBase: dirBase,
    urlBase: urlBase,
    //` env: process.env <-- uncomment for debugging .ENV issues

}, MODULE_NAME);

mcode.success('Successfully loaded minimum web app environment.');

// #endregion

// #endregion
// #endregion