// Object Oriented Programming (OOP)

// Class Defination
class Arithematic
{
    // Characteristics
    iNo1 : number;
    iNo2 : number;

    constructor(a : number, b : number)   
    {
        this.iNo1 = a;
        this.iNo2 = b;
    }
    Addition()      // Behaviour
    {
        var Ans : number = 0;       // Local variable
        Ans = this.iNo1 + this.iNo2;
        return Ans;
    }
    Substraction()      // Behaviour
    {
        var Ans : number = 0;       // Local variable
        Ans = this.iNo1 - this.iNo2;
        return Ans;
    }
}
var obj1  = new Arithematic(10,11);
var Ret : number = 0;
Ret = obj1.Addition();
console.log("Addition is : "+Ret);

Ret = obj1.Substraction();
console.log("Substraction is : "+Ret);




// Kay Karayecha ahe?       (Behviours / Functions)
// Addition & Substraction

// Te karanyakarata kay laganar ahe ?   (Characteristcs / Variables)
// 2 numbers value thewayeala 