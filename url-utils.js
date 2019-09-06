
/**
 * Basic equivalent of `String.prototype.endsWith` made for this utility, just
 * so that dependencies don't need a polyfill.
 * 
 * @private
 * @param {String} string
 * @param {String} search
 * @return {Boolean}
 */
function endsWith(string, search) {
	return string.slice(-search.length) === search;
}

/**
 * Basic equivalent of `String.prototype.startsWith` made for this utility, just
 * so that dependencies don't need a polyfill.
 * 
 * @private
 * @param {String} string
 * @param {String} search
 * @return {Boolean}
 */
function startsWith(string, search) {
	return string.slice(0, search.length) === search;
}

/**
 * Concatenate several URL parts into a single string, inserting forward slashes
 * between each part and taking care not to double-slash any parts.  Useful for
 * when the URL parts aren't known to include their respective slashes or not.
 * 
 * The first URL will retain any leading slash, and the last URL will retain any
 * trailing slash.
 * 
 * @param {...String} urlParts
 * @return {String} Combined URL.
 */
export function join(...urlParts) {
	return urlParts
		.map((urlPart, index) => startsWith(urlPart, '/') && index !== 0 ? urlPart.substring(1) : urlPart)
		.map((urlPart, index) => endsWith(urlPart, '/') && index !== urlParts.length - 1 ? urlPart.slice(0, -1) : urlPart)
		.join('/');
}

/**
 * Convert an object to a URL query parameter string.
 * 
 * @param {Object} object
 * @return {String}
 *   A value that can be used as a search string, minus a leading `?`.
 */
export function objectToSearchString(object) {
	return Object.keys(object)
		.filter(key => object[key] != null) // eslint-disable-line eqeqeq
		.map(key => `${key}=${encodeURIComponent(object[key]).replace('%20', '+')}`)
		.join('&');
}

/**
 * Convert URL query parameters to an object.
 * 
 * @param {String} searchString
 * @return {Object}
 *   An object whose keys/values are the keys/values of the search string.
 */
export function searchStringToObject(searchString) {
	return searchString.replace(/^\?/, '').split('&')
		.map(param => param.split('='))
		// Would have liked to use `[key, value]`, but Babel converts it to something requiring Symbol
		.reduce((acc, paramParts) => {
			acc[paramParts[0]] = decodeURIComponent(paramParts[1].replace('+', '%20'));
			return acc;
		}, {});
}
