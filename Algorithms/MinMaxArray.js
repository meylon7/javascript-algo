// function getMinMax(arr) {
//   let min = arr[0];
//   let max = arr[0];

//   for (let val of arr) {
//     if (val > max) {
//       max = val;
//     }

//     if (val < min) {
//       min = val;
//     }
//   }

//   return {
//     min,
//     max
//   };
// }

// function getMinMax(arr) {
//   return {
//     min: Math.min( ...arr ),
//     max: Math.max( ...arr )
//   }
// }


function getMinMax(arr) {
    const sortedArray = arr.sort((a, b) => a - b)
  
    return {
      min: sortedArray[0],
      max: sortedArray[sortedArray.length - 1]
    }
  }
  
  console.log( getMinMax([1, 10, 2, 9, 3, 7, 4, 6, 5]) );