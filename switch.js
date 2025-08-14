function choice()
{
   let a=parseInt(prompt("Enter the value of A:"));
   let b=parseInt(prompt("Enter the value of B:"));
   
   let flag=1;

   while(flag!=0)
   {
   let choice=parseInt(prompt("1.Addition\n2.Substraction\n3.Multiplication\n4.Division\nEnter your choice"));

   
   switch(choice)
   {
     case 1: {
              alert("Addition of A & B:"+(a+b));
              break;
     }
     case 2: { 
              alert("Substraction of A & B:"+(a-b));
              break;
     }
     case 3: {
              alert("Multiplication of A & B:"+(a*b));
              break;
     }
     case 4: {
              alert("Division of A & B:"+(a/b));
              break;
     }
     default :{
           alert("Invalid Input");
     }
    
    }

  if(confirm("Do you want to contniue ....ok..... cancel...! "))
  {

  }
  else{
    flag=0;
   }
  }
  alert("Application has been closed....!");
}