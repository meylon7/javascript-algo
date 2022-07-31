// Regular Expression Sticky Matching
// Keep the matching position sticky between matches and this way 
// support efficient parsing of arbitrary long input strings, 
// even with an arbitrary number of distinct regular expressions.

// ECMAScript 6
let parser = (input, match) => {
    for (let pos = 0, lastPos = input.length; pos < lastPos;) {
        for (let i = 0; i < match.length; i++) {
            match[i].pattern.lastIndex = pos
            let found
            if ((found = match[i].pattern.exec(input)) !== null) {
                match[i].action(found)
                pos = match[i].pattern.lastIndex
                break
            }
        }
    }
}

let report = (match) => {
    console.log("1",JSON.stringify(match))
}
parser("Foo 1 Bar 7 Baz 42", [
    { pattern: /Foo\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /Bar\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /Baz\s+(\d+)/y, action: (match) => report(match) },
    { pattern: /\s*/y, action: (match) => { } }
])
// ECMAScript 5
var parser2 = function (input, match) {
    for (var i, found, inputTmp = input; inputTmp !== ""; ) {
        for (i = 0; i < match.length; i++) {
            if ((found = match[i].pattern.exec(inputTmp)) !== null) {
                match[i].action(found);
                inputTmp = inputTmp.substr(found[0].length);
                break;
            }
        }
    }
}

var report2 = function (match) {
    console.log("2",JSON.stringify(match));
};
parser2("Foo 1 Bar 7 Baz 42", [
    { pattern: /^Foo\s+(\d+)/, action: function (match) { report2(match); } },
    { pattern: /^Bar\s+(\d+)/, action: function (match) { report2(match); } },
    { pattern: /^Baz\s+(\d+)/, action: function (match) { report2(match); } },
    { pattern: /^\s*/,         action: function (match) {}                 }
]);