
url-utils
=========

[![Build Status](https://travis-ci.com/ultraq/url-utils.svg?branch=master)](https://travis-ci.com/ultraq/url-utils)
[![Coverage Status](https://coveralls.io/repos/github/ultraq/url-utils/badge.svg?branch=master)](https://coveralls.io/github/ultraq/url-utils?branch=master)
[![npm](https://img.shields.io/npm/v/@ultraq/url-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/url-utils)
[![License](https://img.shields.io/github/license/ultraq/url-utils.svg?maxAge=2592000)](https://github.com/ultraq/url-utils/blob/master/LICENSE.txt)

A collection of utilities for working with URLs.


Installation
------------

Via npm:

```
npm install @ultraq/url-utils
```


API
---

### join(...urlParts)

Concatenate several URL parts into a single string, inserting forward slashes
between each part and taking care not to double-slash any parts.  Useful for
when the URL parts aren't known to include their respective slashes or not.

The first URL will retain any leading slash, and the last URL will retain any
trailing slash.

 - **urlParts**: argument list of URL parts to combine

### objectToSearchString(object)

Convert an object to a URL query parameter string, minus a leading `?`.

 - **object**: Object whose key/value pairs are converted to `key=value` URL
   parameters, joined by `&`s.

### searchStringToObject(searchString)

Convert URL query parameters to an object.

 - **searchString**: String where `key=value` is converted to object keys/values,
   pairs separated by `&`s and ignoring any leading `?`.
