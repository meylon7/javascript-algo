function removeDuplicates(array) {
    return [...new Set(array)]
  }
  
  // function removeDuplicates(array) {
  //   const map = {}
  
  // 	for (const char of array) {
  // 		if (map[char]) {
  // 			map[char]++
  // 		} else {
  // 			map[char] = 1
  // 		}
  // 	}
  
  // 	return Object.keys(map)
  // }
  
  const array = ['🍎','🍌','🍎','🍍','🍌','🍎','🍇','🍇','🥥']
  console.log( removeDuplicates(array) );