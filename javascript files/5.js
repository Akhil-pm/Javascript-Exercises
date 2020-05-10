function display()
{
    var five=document.getElementById("five");
    var output='';
    for(let i=0;i<=15;i++)
{
    if(i % 2 == 0)
    {
        output += "<br>" +i + " - even number"
        console.log(i + " is even number");
    }
    else
    {
        output += "<br>" +i + " - odd number"
        console.log(i + " is odd number");
    }
}
five.innerHTML=output;
}
