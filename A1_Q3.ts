function DisplayFactors(value : number) : void
{
    var cnt : number = 0;

    for(cnt = 1; cnt <= value/2; cnt++)
    {
        if((value % cnt) == 0)
        {
            console.log(cnt);
        }

    }
}

function main() : void
{
    var no : number = 20;

    DisplayFactors(no);
}

main();