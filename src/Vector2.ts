class Vector2 {
    private _x: number;
    private _y: number;
    private _magnitude: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
        this._magnitude = this.squaredMagnitude() ** 0.5;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    set x(x: number) {
        this._x = x;
        this._magnitude = this.squaredMagnitude() ** 0.5;
    }

    set y(y: number) {
        this._y = y;
        this._magnitude = this.squaredMagnitude() ** 0.5;
    }

    get magnitude(){
        return this._magnitude;
    }
    
    squaredMagnitude() : number {
        return this.x**2 + this.y**2;
    }

    negative() : Vector2 {
        return new Vector2(-this.x, -this.y);
    }

    normalized() : Vector2 {
        return new Vector2(this.x/this.magnitude, this.y/this.magnitude);
    }

    add(other: Vector2) : Vector2 {
        return new Vector2(this.x+other.x, this.y+other.y);
    }

    minus(other: Vector2) : Vector2 {
        return this.add(other.negative());
    }

    dot(other: Vector2) : Vector2 {
        return new Vector2(this._x * other._x, this._y * other._y);
    }

    squaredDistance(other: Vector2) : number {
        return this.minus(other).squaredMagnitude();
    }

    distance(other: Vector2) : number {
        return this.minus(other).magnitude;
    }

    direction(other: Vector2) : Vector2 {
        return this.minus(other).normalized();
    }
}