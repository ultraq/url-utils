/* 
 * Copyright 2019, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-env jest */
import {
	join,
	objectToSearchString, searchStringToObject
} from './url-utils.js';

/**
 * Tests for the URL utilities.
 */
describe('url-utils', function() {

	describe('#join', function() {

		test('Puts URL path parts together without double forward slashes', function() {
			let result = join(
				'https://my.website.dev/',
				'/homepage/',
				'/index.html'
			);
			expect(result).toBe('https://my.website.dev/homepage/index.html');
		});

		test('Slashes are inserted between URL parts', function() {
			let result = join(
				'https://my.website.dev',
				'homepage',
				'index.html'
			);
			expect(result).toBe('https://my.website.dev/homepage/index.html');
		});

		test('The first URL part retains the leading slash', function() {
			let result = join(
				'/hello/',
				'/there'
			);
			expect(result).toBe('/hello/there');
		});

		test('The last URL part retains the trailing slash', function() {
			let result = join(
				'hello/',
				'/there/'
			);
			expect(result).toBe('hello/there/');
		});
	});

	describe('#objectToSearchString', function() {

		test('Maps object keys/values into search string keys/values', function() {
			const object = {
				greeting: 'Hello',
				animal: 'Seal',
				chonkiness: 'Oh lawd'
			};
			let result = objectToSearchString(object);
			expect(result).toBe('greeting=Hello&animal=Seal&chonkiness=Oh+lawd');
		});

		test('null/undefined values are not included in the resulting search string', function() {
			const object = {
				greeting: 'Hello',
				animal: null,
				chonkiness: undefined
			};
			let result = objectToSearchString(object);
			expect(result).toBe('greeting=Hello');
		});
	});

	describe('#searchStringToObject', function() {

		test('Maps keys/values of a search string to an object', function() {
			const searchString = '?greeting=Hello&animal=Seal&chonkiness=Oh+lawd';
			let result = searchStringToObject(searchString);
			expect(result).toEqual({
				greeting: 'Hello',
				animal: 'Seal',
				chonkiness: 'Oh lawd'
			});
		});
	});
});
