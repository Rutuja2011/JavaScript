function table()
{
    let num = parseInt(prompt("Enter the to print the Table"));

    for(let i=1 ; i<=10 ;i++)
    {
        console.log(num * i);
        console.log(num + "x" +i+ "=" +(num * i));
        console.log(`${num} x ${i} = ${num * i}`)
    }
}                                                     