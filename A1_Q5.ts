function DisplayFibonacci(no : number) : void
{ 
	var term1 : number = 1;
	var term2 : number = 1;
	
	var term3 : number = 0;
	
	console.log(term1);
	console.log(term2);
	
	while(term3 < no)
	{
		term3 = term1 + term2;
		console.log(term3);
		
		term1 = term2;
		term2 = term3;		
	}
}

function main() : void
{
	var value : number = 21;
	
	DisplayFibonacci(value);
}

main();