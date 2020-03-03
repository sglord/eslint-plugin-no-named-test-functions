/**
 * @fileoverview no predefined functions in it blocks
 * @author TMT
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "eslint-plugin-no-named-test-functions",
            category: "Fill me in",
            recommended: false,
        },
        fixable: "code",  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {
        const allNodes = [];
        const ERROR_MSG = `Tests should be written within "it" or "test" blocks`;

        return {
            VariableDeclaration(node) {
                allNodes.push(node);
            },
            FunctionDeclaration(node) {
                allNodes.push(node);
            },
            ExpressionStatement(node) {
                if (node.expression.callee && (node.expression.callee.name === "it" || node.expression.callee.name === "test")) {
                    const sourceCode = context.getSourceCode();
                    const target = node.expression.arguments[1];

                    if (target && target.type === "Identifier") {
                        context.report({
                            node,
                            message: ERROR_MSG,
                            fix(fixer) {
                                const originalNode = allNodes.find(n => {
                                    return n.type === "VariableDeclaration"
                                        ? n.declarations[0].id.name === target.name
                                        : n.id.name === target.name;
                                });

                                if (originalNode) {
                                    const declarationBlock = originalNode.declarations ? originalNode.declarations[0].init : originalNode;
                                    const declarationText = sourceCode.getText(declarationBlock);

                                    return [fixer.replaceTextRange(target.range, declarationText), fixer.remove(originalNode)];
                                };
                            }
                        });
                    };
                };
            },
        };
    },
};
