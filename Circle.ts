class Circle 
{
    Radius : number;
    PI : number;

    constructor(value : number)
    {
        this.PI = 3.14;
        this.Radius = value;
    }

    Area() : number
    {
        var Ans : number = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans; 
    }
}

function main() : void
{
    var iRet : number = 0;
    var obj1 = new Circle(11);
    var obj2 = new Circle(12)

    iRet = obj1.Area();
    console.log("Area is : "+iRet);

    iRet = obj2.Area();
    console.log("Area is : "+iRet);
}

main();