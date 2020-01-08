
//import { commandLineArgs } from 'command-line-args';
const commandLineArgs = require('command-line-args');

const optionDefinitions = [{ name: 'verbose', alias: 'v', type: Boolean }];
const options = commandLineArgs(optionDefinitions);
const verbose = options.verbose;



verbose && console.error('--------------------------------------------------------------------------------------');
verbose && console.error('Starting snow package...');
verbose && console.error('--------------------------------------------------------------------------------------');

/*
 *	  Copyright 2020 Daniel Giribet
 *
 *	 Licensed under the Apache License, Version 2.0 (the "License");
 *	 you may not use this file except in compliance with the License.
 *	 You may obtain a copy of the License at
 *
 *		 http://www.apache.org/licenses/LICENSE-2.0
 *
 *	 Unless required by applicable law or agreed to in writing, software
 *	 distributed under the License is distributed on an "AS IS" BASIS,
 *	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *	 See the License for the specific language governing permissions and
 *	 limitations under the License.
 */
