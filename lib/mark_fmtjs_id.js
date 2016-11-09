var walk = require('fmtjs-ast-walker').walk

function mark_fmtjs_id(ast) {
	var next_id = 0
	walk(ast, {
		enter: function(node, nav) {
			node.fmtjs_id = next_id++
		}
	})
	return ast
}

module.exports = mark_fmtjs_id