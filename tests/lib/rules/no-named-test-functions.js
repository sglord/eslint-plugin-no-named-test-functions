/**
 * @fileoverview no predefined functions in it blocks
 * @author TMT
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-named-test-functions");
const RuleTester = require("eslint").RuleTester;

const ERROR_MSG = `Tests should be written within "it" or "test" blocks`;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

RuleTester.setDefaultConfig({
    parserOptions: {
        ecmaVersion: 8,
        ecmaFeatures: {
            jsx: true,
            globalReturn: true
        },
        ecmaFeatures: {
            es6: true,
        },
    }
});

const RT = new RuleTester();

RT.run("no-named-test-function", rule, {

    valid: [
        {
            code: "it('base es6', () => {});"
        },
        {
            code: "it('base func', function (){});"
        },
        {
            code: "it('async func', function async (){});"
        },
        {
            code: "it('async es6', async () => {})"
        },
        {
            code: "it('done func', function (done){});"
        },
        {
            code: "it('done es6', done => {});"
        },
        {
            code: "it('async done es6', async done => {});"
        },
        {
            code: "test('base es6', () => {});"
        },
        {
            code: "test('base func', function (){});"
        },
        {
            code: "test('async func', function async (){});"
        },
        {
            code: "test('async es6', async () => {})"
        },
        {
            code: "test('done func', function (done){});"
        },
        {
            code: "test('done es6', done => {});"
        },
        {
            code: "test('async done es6', async done => {});"
        },
    ],

    invalid: [
        {
            code: "it('passed in function variable', testFunction);",
            errors: [{
                message: ERROR_MSG,
                type: "ExpressionStatement",
            }],
        },
        {
            code: "test('passed in function variable', testFunction);",
            errors: [{
                message: ERROR_MSG,
                type: "ExpressionStatement"
            }]
        }
    ]
});
