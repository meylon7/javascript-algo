const arr1 = [
    {id: 1, name: 'Tom'},
    {id: 2, name: 'John'},
  ];
  const arr2 = [{id: 1, name: 'Tom'}];
  
  function getDifference(array1, array2) {
    return array1.filter(object1 => {
      return !array2.some(object2 => {
        return object1.id === object2.id;
      });
    });
  }
  
  // 👇️ [{id: 2, name: 'John'}]
  console.log(getDifference(arr1, arr2));