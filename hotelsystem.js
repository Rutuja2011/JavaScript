function bill()
{
    
    let VadaPav=0;
    let MisalPav = 0;
    let Noodles = 0;
    let Manchurian = 0;
    let flag=1;
    while(flag!=0)

    {

    let choice=parseInt(prompt("1.VadaPav-->Rs.20 \n2.MisalPav-->Rs.70 \n3.Noodles-->Rs.80 \n4.Manchurian-->Rs.90 \nEnter the choice for food ordering"));
  
   
    switch(choice)
    {
        case 1 :{
            alert("VadaPav is delivered");
            VadaPav+=20;
            break;    
        }
        case 2 :{
            alert("MisalPav is delivered");
            MisalPav+=70;
            break;
        }
        case 3 :{
            alert("Noodles is delivered");
            Noodles+=80;
            break;
        }
        case 4 :{
            alert("Manchurian is delivered");
            Manchurian+=90;
            break;
        }
        default :{
            alert("Invalid Choice.........!");
        }
      } 
        if(confirm("Do you want to order more items...!"))
        {

             
               
        }
        else{

              flag =0;

          } 
      }
      alert(`Your Bill is \nVadaPav : ${VadaPav} \nMisalPav : ${MisalPav} \nNoodles : ${Noodles} \nManchurian : ${Manchurian} \nTotal Bill-->${VadaPav+MisalPav+Noodles+Manchurian}`);        
  }
  
