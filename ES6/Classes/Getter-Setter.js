// Getter/Setter
// Getter/Setter also directly within classes (and not just within object initializers, 
// as it is possible since ECMAScript 5.1).
class Rectangle {
    constructor(width, height) {
        this._width = width
        this._height = height
    }
    set width(width) { this._width = width }
    get width() { return this._width }
    set height(height) { this._height = height }
    get height() { return this._height }
    get area() { return this._width * this._height }
}
var r = new Rectangle(50, 20)
r.area === 1000
console.log(r.area, r.width, r.height)