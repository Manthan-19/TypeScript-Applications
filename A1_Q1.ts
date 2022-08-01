/*
    Write a typescript program which contains one function named as Maximum. That function accepts three parameters and it should returns largest value from three input parameters. 
    Input :  23 89 6
    Output: Maximum number is 89
*/

function main() : void
{
    var no1 : number = 23;
    var no2 : number = 89;
    var no3 : number = 6;
    var ret : number = 0;

    ret = maximumElement(no1, no2, no3);

    console.log("Maximum number is : " + ret);

}

function maximumElement(val1 : number, val2 : number, val3 : number) : number
{
    if((val1 > val2) && (val1 > val3))
    {
        return val1;
    }    
    else if((val2 > val1) && (val2 > val3))
    {
        return val2;
    }
    else
    {
        return val3;
    }
}

main();