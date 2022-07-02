var no1 : number = 10;  //Data Defination Statements
var no2 : number = 11;
var ret : number = 0;

ret = Addition(no1,no2);
console.log("Addition is : " +ret);

function Addition(value1 : number = 11, value2 : number = 21) : number 
{
    var ans : number = 0;
    ans = value1 + value2;
    return ans;
}


