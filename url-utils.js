
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
		.map((urlPart, index) => urlPart.startsWith('/') && index !== 0 ? urlPart.substring(1) : urlPart)
		.map((urlPart, index) => urlPart.endsWith('/') && index !== urlParts.length - 1 ? urlPart.slice(0, -1) : urlPart)
		.join('/');
}
