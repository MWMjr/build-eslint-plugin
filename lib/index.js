module.exports = function(context) {
  return {
    IfStatement(node) {
      if (isNumericLiteral(node.consequent)) {
        return
      }
      context.report({
        node: node,
        message: 'Found Numeric Literal',
        fix: function(fixer) {
          // fix the codez
        }
      })
      
      function isNumericLiteral(n) {
        return !n || n.type === 'NumericLiteral';
      }
    }
  }
};
