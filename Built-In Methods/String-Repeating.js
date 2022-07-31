var depth = 3

" ".repeat(4 * depth)
"foo".repeat(3) // foofoofoo

// ECMAScript 5
Array((4 * depth) + 1).join(" ");
Array(3 + 1).join("foo");  // foofoofoo