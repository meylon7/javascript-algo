const folders = [
    "index.js",
    ["flatten.js", "map.js"],
    ["any.js", ["all.js", "count.js"]],
];

function flatten(acc, item) {
    if (Array.isArray(item)) {
        return item.reduce(flatten, acc);
    }
    return [...acc, item];
}

result = folders.reduce(flatten, []);

console.log(result)