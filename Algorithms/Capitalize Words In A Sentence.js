function capitalize(str) {
    return str
          .split(' ')
          .reduce((prev, current) => `${prev} ${current[0].toUpperCase() + current.slice(1)}`, '')
  }
  
  console.log(capitalize('a long vacation'))