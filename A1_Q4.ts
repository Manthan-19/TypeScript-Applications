function CheckPrime (value : number) : boolean
{
	var cnt : number = 0;
	
	for(cnt = 2; cnt <= value/2; cnt++)
	{
		if((value % cnt) == 0)
		{
			break;
		}
	}
	
	if(cnt > value/2)
	{
		return true;
	}
	return false;
}

function main() : void 
{
	var no : number = 11;
	
	var bFlag : boolean = false;
	
	bFlag = CheckPrime(no);
	
	if(bFlag == true)
	{
		console.log(no + " is Prime Number");
	}
	else
	{
		console.log(no + " is not Prime Number");
	}
}

main();