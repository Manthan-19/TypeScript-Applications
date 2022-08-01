function SecondMaximum(brr : number[]) : number
{
	var cnt : number = 0;
	var max : number = brr[0];
	var secMax : number = brr[0];
	
	for(cnt = 1; cnt < brr.length; cnt++)
	{
		if((brr[cnt] > secMax) && (brr[cnt] < max))
		{
			secMax = brr[cnt];
		}
		
		if(brr[cnt] > max)
		{
			max = brr[cnt];
		}
	}
	
	return secMax;
}

function main() : void 
{
	var arr : number[] = [23,89,6,29,56,45,77,32];
	var ret : number = 0;
	
	ret = SecondMaximum(arr);
	
	console.log("Second Maximum number is : " + ret);
}

main();