class Circle 
{
    Radius : number;
    PI : number;

    constructor(b : number)
    {
        this.PI = 3.14;
        this.Radius = b;
    }

    Area() : number
    {
        var Ans : number = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans; 
    }
}

class CircleX extends Circle 
{

    constructor(value : number)
    {
        super(value);
    }
    
    Circumference() : number
    {
        var Ans : number = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    }
}

function main() : void 
{
    var iRet : number = 0;
    var objx = new Circle(11);
    var objy = new CircleX(12);

    iRet = objx.Area();
    console.log("Area is : "+iRet);

    iRet = objy.Circumference();
    console.log("Circumference is : "+iRet);
} 

main();