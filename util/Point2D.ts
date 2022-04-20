class Point2D{
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

    static distanceX(p1 : Point2D, p2 : Point2D)
    {
        return Math.sqrt(Math.pow(p1.x-p2.x,2));
    }

    static distanceY(p1 : Point2D, p2 : Point2D)
    {
        return Math.sqrt(Math.pow(p1.y-p2.y,2));
    }
    static distance(p1 : Point2D, p2 : Point2D)
    {
        return Math.sqrt(Math.pow(p1.x-p2.x,2)+ Math.pow(p1.y-p2.y,2));
    }

}
