class Vector2D{
    x: number;
    y: number;

    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    toString() : string
    {
        return this.x+" "+this.y;
    }

    static distanceX(p1 : Vector2D, p2 : Vector2D) : number
    {
        return Math.sqrt(Math.pow(p1.x-p2.x,2));
    }

    static distanceY(p1 : Vector2D, p2 : Vector2D) : number
    {
        return Math.sqrt(Math.pow(p1.y-p2.y,2));
    }

    static distance(p1 : Vector2D, p2 : Vector2D) : number
    {
        return Math.sqrt(Math.pow(p1.x-p2.x,2)+ Math.pow(p1.y-p2.y,2));
    }

    substract(p2: Vector2D)
    {
        this.x = this.x - p2.x;
        this.y = this.y - p2.y;
    }

    add(p2: Vector2D)
    {
        this.x = this.x + p2.x;
        this.y = this.y + p2.y;
    }

    divide(p2: Vector2D)
    {
        this.x = this.x / p2.x;
        this.y = this.y / p2.y;
    }

    multiply(p2: Vector2D)
    {
        this.x = this.x * p2.x;
        this.y = this.y * p2.y;
    }

    length() : number
    {
        return Math.sqrt(this.x*this.x+ this.y*this.y);
    }

    normalize()
    {
        let length = this.length();
        this.x = this.x/length;
        this.y = this.y/length;
    }

    scale( scalar )
    {
        this.x = this.x*scalar;
        this.y = this.y*scalar;
    }

    round()
    {
        this.x = Math.round(this.x)
        this.y = Math.round(this.y);
    }

}
