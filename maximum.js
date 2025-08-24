function maximum()
{
    let a = parseInt(prompt("Enter the value of a"));
    let b = parseInt(prompt("Enter the value of b:"));
    let c = parseInt(prompt("Enter the value of c:"));
    
    let max;
    if(a>b & a>c)
    {
        max = a;
    }
    else if(b>a && b>c)
    {
        max = b;
    }
    else
    {
        max = c;
    }

    alert(`Maximum number from given three number ${a} , ${b} & ${c} is :: `+max);
}