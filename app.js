var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.distanceFromOrigin = function () {
        return Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
    };
    Point.prototype.translate = function (dx, dy) {
        this._x += dx;
        this._y += dy;
    };
    Point.prototype.toString = function () {
        return "[".concat(this._x, ",").concat(this._y, "]");
    };
    Point.prototype.doubleDistance = function (p) {
        return Math.sqrt(Math.pow((this._x - p.x), 2) + Math.pow((this._y - p.y), 2));
    };
    return Point;
}());
var p1 = new Point(2, 2);
var p2 = new Point(5, 2);
// console.log(p1.distanceFromOrigin());
// p1.translate(5,2)
// console.log(p1.distanceFromOrigin());
// console.log(p1.toString());
// console.log(p2.toString());
// console.log(p1.doubleDistance(p2));
var Line = /** @class */ (function () {
    function Line(_p1, _p2) {
        this._p1 = _p1;
        this._p2 = _p2;
    }
    Object.defineProperty(Line.prototype, "p1", {
        get: function () {
            return this._p1;
        },
        set: function (p1) {
            this._p1 = p1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "p2", {
        get: function () {
            return this._p2;
        },
        set: function (p2) {
            this._p2 = p2;
        },
        enumerable: false,
        configurable: true
    });
    Line.prototype.toString = function () {
        return "".concat(this._p1.toString(), ", ").concat(this._p2.toString());
    };
    Line.prototype.distance = function () {
        return Math.sqrt(Math.pow((this._p1.x - this._p2.x), 2) + Math.pow((this._p1.y - this._p2.y), 2));
    };
    return Line;
}());
var taskas1 = new Point(2, 4);
var taskas2 = new Point(1, 2);
var taskas3 = new Line(taskas1, taskas2);
console.log(taskas3.toString());
console.log(taskas3.distance());
