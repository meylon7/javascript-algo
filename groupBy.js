var data = [
    { group: "A", name: "hello" },
    { group: "B", name: "world" },
    { group: "A", name: "again" }
  ];
  function groupBy(objectArray, property) {
    return objectArray.reduce((accumulator, currentObject) => {
      let key = currentObject[property];
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(currentObject.name);
      return accumulator;
    }, {});
  }
  var output = {};
  let grouped = groupBy(data, "group");
  Object.assign(output, grouped);
  
  console.log(output);

// {A: Array(2), B: Array(1)}
// A: Array(2)
        // 0: "hello"
        // 1: "again"
// B: Array(1)
        // 0: "world"