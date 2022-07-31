/** First Solution **/
// function isAnagram(stringA, stringB) {
// 	const normalize = (str) => {
// 		return str
// 			.replace(/[^\w]/g, '')
// 			.toLowerCase()
// 			.split('')
// 			.sort()
// 			.join('')
// 	}

//   return normalize(stringA) === normalize(stringB);
// }

/** Second Solution **/
function createCharMap (str) {
	const map = {}
	const normalizedString = str.replace(/[^\w]/g, '').toLowerCase()

	for (let char of normalizedString) {
		map[char] = map[char] + 1 || 1
	}

	return map
}

function isAnagram(stringA, stringB) {
  const charMapA = createCharMap(stringA)
  const charMapB = createCharMap(stringB)

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false
    }
  }

  return true
}

// should be true
console.log( isAnagram('Night', 'Thing') )
console.log( isAnagram('Statue of Liberty', 'Built to stay free') )

// should be false
console.log( isAnagram('Night', 'Light') )
console.log( isAnagram('Statue of Liberty', 'eiffel tower') )