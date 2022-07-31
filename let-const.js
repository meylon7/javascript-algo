let i = 1
i = 2

console.log(i) // 2

const c = 1;
c = 2 
console.log(c) // assignment to constant error

const d; // = undefined - Every const declaration, therefore, must be initialized at the time of declaration.
console.log(d) // missing initializer in const

const a = [1,2]
a.push(3)
a = [1,2,3] // assignment to constant error

// const cannot be updated or re-declared
// let can updated or re-declared
