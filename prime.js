function prime()
{
    let n = parseInt(prompt("Enter the number to check "));
    let flag = true;
     
    for(let i=2;i<n;i++)
    {
      if(n%i==0)
      {
        flag = false;
      }
    }
      if(flag)
      {
      alert("Number is Prime");
      }
      else{
        alert("Number is  not prime");
      }
}