function factorial(iNo : number) : number
{
    if(iNo == 0)
        return 1;

    else    
        var iAns : number = (factorial(iNo-1) * iNo);
        return iAns;
}

function main() : void
{
    var iRet : any = factorial(6)
    console.log(iRet);
}

main();