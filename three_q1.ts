class Arithematic1
{
    iNo1 : number;
    iNo2 : number;

    constructor(a : number,b : number)
    {
        this.iNo1 = a;
        this.iNo2 = b;
    }

    Addition() : number
    {
        var Ret : number = 0;
        Ret = this.iNo1 + this.iNo2;
        return Ret;
    }

    Substraction () : number
    {
        var Ret : number = 0;
        Ret = this.iNo1 - this.iNo2;
        return Ret;
    }

    Multiplication() : number
    {
        var Ret : number = 0;
        Ret = this.iNo1 * this.iNo2;
        return Ret;
    }

    Division () : number 
    {
        var Ret : number = 0;
        Ret = this.iNo1 / this.iNo2;
        return Ret;
    }


}
function main() : void
{
    var obj1 = new Arithematic1(10,11);
    var Ret : number = 0;

    Ret = obj1.Addition();
    console.log("Addition is : "+Ret);

    Ret = obj1.Substraction();
    console.log("Substraction is : "+Ret);

    Ret = obj1.Multiplication();
    console.log("Multiplication is : "+Ret);

    Ret = obj1.Division();
    console.log("Division is : "+Ret);

    var obj2 = new Arithematic1(21,11);
    var Ret : number = 0;

    Ret = obj2.Addition();
    console.log("Addition is : "+Ret);

    Ret = obj2.Substraction();
    console.log("Substraction is : "+Ret);

    Ret = obj2.Multiplication();
    console.log("Multiplication is : "+Ret);

    Ret = obj2.Division();
    console.log("Division is : "+Ret);
}

main();