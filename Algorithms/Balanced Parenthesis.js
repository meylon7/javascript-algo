console.clear()

function isBalanced(str) {
  const stack = []
  
  for (let char of str) {
    if ( char === '(' ) {
      stack.push(char)
    } else if ( stack.pop() !== '(' ) {
      return false
    }
  }
  
  return stack.length !== 0 ? false : true
}

// balanced parenthesis
console.log( isBalanced('') )
console.log( isBalanced('()') )
console.log( isBalanced('(())') )
console.log( isBalanced('()()(())') )

// not balanced parenthesis
console.log( isBalanced(' ') )
console.log( isBalanced('(') )
console.log( isBalanced(')') )
console.log( isBalanced(')()(') )
console.log( isBalanced('(()))') )