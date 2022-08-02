// int Arr[5] = {10,20,30,40,50};  ----> C,C++,C#,Java

//Arr is an one dimensional array that contains 5 elements each element is of type number
var Arr : number[] = [10,20,30,40,50];

console.log("Length of Array is : "+Arr.length);
console.log("First element is : "+Arr[0]);
console.log("Second element is : "+Arr[1]);

var iCnt : number = 0;
console.log("Elements of Array are : " );
for(iCnt = 0;iCnt<Arr.length;iCnt++)
{
    console.log(Arr[iCnt]+"\t");
}