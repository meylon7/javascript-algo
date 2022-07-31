// Intuitive expression interpolation for single-line and multi-line strings. 
// (Notice: don't be confused, Template Literals were originally named "Template Strings" 
// in the drafts of the ECMAScript 6 language specification)
// ECMAScript 6
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
                want to buy ${card.amount} ${card.product} for
                a total of ${card.amount * card.unitprice} bucks?`
// Custom Interpolation - Flexible expression interpolation for arbitrary methods.
get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`
// Raw String Access
function quux (strings, ...values) {
    strings[0] === "foo\n"
    strings[1] === "bar"
    strings.raw[0] === "foo\\n"
    strings.raw[1] === "bar"
    values[0] === 42
}
quux`foo\n${ 42 }bar`
String.raw`foo\n${ 42 }bar` === "foo\\n42bar"
//  no equivalent in ES5

// ECMAScript 5
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + customer.name + ",\n" +
    "want to buy " + card.amount + " " + card.product + " for\n" +
    "a total of " + (card.amount * card.unitprice) + " bucks?";
// Custom Interpolation - Flexible expression interpolation for arbitrary methods.
get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux);