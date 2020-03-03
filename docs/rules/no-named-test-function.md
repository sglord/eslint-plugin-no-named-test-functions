# no predefined functions in it or test blocks (no-named-test-function)

Created to ensure test file structure is consistent across codebase.

## Rule Details

Examples of **incorrect** code for this rule:

```js
const myTestFunction = (foo, bar) => {return foo + bar}

it('my test', myTestFunction)
```

Examples of **correct** code for this rule:

```javascript
it('my test', (foo, bar) => {return foo + bar})
```

### Options

#### Fix
When run with the `--fix` command, all examples of incorrect code will be refactored into the correct style. The named test function will be replaced with the function definition. The original function declaration will be removed.

* Side Effect: Running the `--fix` command does not remove whitespace or empty lines around removed function declarations. This should be handled by other linters or code formatters (e.g. Prettier)
