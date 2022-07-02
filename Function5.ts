function main() : void 
{
    var no : number = 11;
    var bRet : boolean;
    bRet = ChechEven(no);
    
    if(bRet == true)
    {
        console.log("Number is even");
    }
    else
    {
        console.log("Number is odd");
    }
}

function ChechEven(value : number) : boolean
{
    if((value % 2) == 0)
    {
        return true;
    }

    else
    {
        return false;
    }
} 

main();