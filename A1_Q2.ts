/*
    Write a typescript program which contains one function named as Area. That function should calculate area of circle. 
    Accept value of radius from user and return its area. Default value of PI should be 3.14 if it is not provided by the caller. 
    Input: 5
    Output: Area of circle is 78.5
*/

function calculateArea(radius : number, PI : number = 3.14) : number
{
    var ans : number = 0.0;
    ans = radius * radius * PI;
    return ans;
}

function main() : void
{
    var radius : number = 5;
    var area : number = 0.0;

    area = calculateArea(radius);

    console.log("Area of Circle is " + area);
}

main();