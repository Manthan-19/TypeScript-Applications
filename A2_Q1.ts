function MaximumElement(brr : number [])
{
	var cnt : number = 0;
	var max : number = brr[0];
	
	for(cnt = 1; cnt < brr.length; cnt++)
	{
		if(brr[cnt] > max)
		{
			max = brr[cnt];
		}
	}
	
	return max;
}

function main() : void
{
	var arr : number[] = [23,89,6,29,56,45,77,32];
	var ret : number = 0;
	
	ret = MaximumElement(arr);
	
	console.log("Maximum number is : " + ret);
	
}

main();