// By definition, a Map object holds key-value pairs where values of any type 
// can be used as either keys or values. In addition, 
// a Map object remembers the original insertion order of the keys.

let john = { name: 'John Doe' },
    lily = { name: 'Lily Bush' },
    peter = { name: 'Peter Drucker' };

let userRoles = new Map();
console.log(typeof (userRoles)); // object
console.log(userRoles instanceof Map); // true

userRoles.set(john, 'admin');
userRoles.set(lily, 'editor')
    .set(peter, 'subscriber');

console.log(userRoles); // object
// Map(3) {
//{ name: 'John Doe' } => 'admin',
//{ name: 'Lily Bush' } => 'editor',
//{ name: 'Peter Drucker' } => 'subscriber'
//}

let users = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);

console.log(users.get(john)) // admin

let foo = { name: 'Foo' };
users.get(foo);
console.log(users.get(foo))//undefined

console.log(users.has(foo)); // false
console.log(users.has(lily)); // true
console.log(users.size); // 3

// Iterate over map values
for (let role of users.values()) {
    console.log(role);
}
// Iterate over map elements
for (const role of users.entries()) {
    console.log(`${role[0].name}: ${role[1]}`);
}

// To make the iteration more natural, you can use destructuring as follows:
for (let [user, role] of users.entries()) {
    console.log(`${user.name}: ${role}`);
}
// you can use the forEach() method of the map object:
users.forEach((role, user) => console.log(`${user.name}: ${role}`));

// Convert map keys or values to a array
var keys = [...users.keys()];
console.log(keys);

let roles = [...users.values()];
console.log(roles);

// Delete an element by key
users.delete(john)

// Delete all elements in the map
userRoles.clear();
console.log(userRoles.size); // 0