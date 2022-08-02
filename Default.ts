//Default arguments

//Number of default arguments are 2
//Default arguments should be trailing(Left to right)
function Demo(no1 : number, no2 : number = 20, no3 : number = 30)
//function Demo(no1 : number = 10, no2 : number, no3 : number)
{
    console.log("Inside Demo");
}

Demo(11,12);
Demo(10,11,12);

function CalculateArea(radius : number, pi : number = 3.14) : number
{
    var area : number = pi * radius * radius;
    
    return area;
}

var ret = CalculateArea(7);
console.log("Area of circle is : "+ret);

var ret = CalculateArea(3,3);
console.log("Area of circle is : "+ret);