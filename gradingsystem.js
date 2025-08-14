function grading(){
     
    let java=parseInt(prompt("Enter the marks of Java:"));
    let cpp=parseInt(prompt("Enter the marks of Cpp:"));
    let html=parseInt(prompt("Enter the marks of HTML:"));
    let mysql=parseInt(prompt("Enter the marks of MySQL:"));
    let python=parseInt(prompt("Enter the marks of Python:"));
   

    let sum = java + cpp + html + mysql + python ;
    let per = sum/5;
    
    if(per > 90 && per <= 100)
    {
        console.log("Grade O");
    }
    else if(per > 80 && per <= 90)
    {
        console.log("Grade A");  
    }
    else if(per > 70 && per <= 80)
    {
        console.log("Grade B");  
    }
    else if(per > 60 && per <= 70)
    {
        console.log("Grade C");  
    }
    else if(per > 50 && per <= 60)
    {
        console.log("Grade D");  
    }
    else if(per > 40 && per <= 50)
    {
        console.log("Grade Pass");  
    }
    else if(per > 30 && per <= 40)
    {
        console.log("Failed");
    }
    else
    {
        console.log("Invalid");
    }

}