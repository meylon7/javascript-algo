// Set Data-Structure
// Cleaner data-structure for common algorithms based on sets.
let s = new Set()
s.add("hello").add("goodbye").add("hello")
s.size === 2
s.has("hello") === true
for (let key of s.values()) // insertion order
    console.log(key)

// A JavaScript Set is a collection of unique values. 
// Each value can only occur once in a Set. 
// A Set can hold any value of any data type.