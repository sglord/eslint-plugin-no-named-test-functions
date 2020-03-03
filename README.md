[![Build Status](https://travis-ci.org/sglord/eslint-plugin-no-named-test-functions.svg?branch=master)](https://travis-ci.org/sglord/eslint-plugin-no-named-test-functions)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


# eslint-plugin-no-named-test-functions

Requires that `it` and `test` blocks do not contain named variables.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install [no-named-test-function](https://www.npmjs.com/package/eslint-plugin-no-named-test-functions):

```
$ npm install npm i eslint-plugin-no-named-test-functions --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `no-named-test-function` globally.

## Usage

Add `no-named-test-function` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
	"plugins": ["no-named-test-function"]
}
```

Then configure the rule to use under the rules section.

```json
{
	"rules": {
		"no-named-test-function/no-named-test-function.js": 2
	}
}
```