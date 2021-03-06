'use strict';
var syntax = require('./../ast-syntax');
var merge = require('../../structure');

module.exports =  function (node, options) {
    var structure = {};

    if (!Array.isArray(node.arguments)) {
        return node;
    }

    node.arguments.forEach(function (arg) {
        // module name
        if (arg.type === syntax.Literal) {
            structure.name = arg.value;
        }

        // module dependencies
        if (arg.type === syntax.ArrayExpression) {
            structure.deps = arg.elements.map(function (x) {return x.value; });
        }

        // module init func
        if (arg.type === syntax.FunctionExpression) {
            structure.args = arg.params.map(function (x) { return x.name; });
            structure.body = arg.body.body.map(function (x) {
                structure.exports = x.type === syntax.ReturnStatement;
                return x.source();
            }).join('\n');
        }
    });

    return merge(options, structure);
};