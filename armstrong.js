function pow(a,b)//2, 3
{
    let res=1;
    for(let i=1; i<=b; i++)// 1=1 ; 1<=3 ;1++
    {
        res*=a; // 1 = 1 * 2; 2*2 = 4 4*2 = 8

    }
    return res;
}

function count (n) //153
{
    let res = 0; // 0
    while(parseInt(n)!=0) // 153!=0  15!=0 1!=0 0!=0 false hoil condition
    {
        n = n/10 ; //153/ 10 = 15  15/10=1  1/10= 0
        res++; // 1++ 2++ 3
    }
    return res;
}
function armstrong()
{
    let n = parseInt(prompt("Enter the value of n:"));
    
    let temp = n;
    let res = 0;
    let rem = 0;

    while(parseInt(temp)!=0)
    {
       rem = parseInt(temp % 10); // 153%10 rem= 3  15%10 rem=1 1%10  rem=1
       res = res + pow (rem , count(n)); // 0 + pow(3,3)= 27  27+pow(5,3)=27+125= 152   152+ pow(1,3)= 152+1=153
       temp = temp /10; //153/10=15  15/10=1 1/10=0 false

    }
    if(res ==  n)//153==153        
    {
        alert("Number is Armstrong");
    }
    else
    {
        alert("Number is not Armstrong");
    }
}