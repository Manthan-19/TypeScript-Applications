function Summation(brr : number[]) : number
{
	var cnt : number = 0;
	var sum : number = 0;
	
	for(cnt = 0; cnt < brr.length; cnt++)
	{
		sum = sum + brr[cnt];
	}
	
	return sum;
}

function main() : void 
{
	var arr : number[] = [23,6,7,4,5,7];
	var totalSum : number = 0;
	
	totalSum = Summation(arr);

	console.log("Summation is : " + totalSum);
}

main();