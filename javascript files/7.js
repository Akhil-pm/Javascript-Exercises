function findLarge()
{
   let x=parseInt(document.getElementById("num1").value);
   let y=parseInt(document.getElementById("num2").value);
   var seven=document.getElementById("seven");
    if(x == y)
    {
        console.log("Numbers are same");
        seven.innerHTML="<br>Numbers are same"
    }
    else if (x > y)
     {
        console.log("Largest of two is : " +x);
        seven.innerHTML="<br>Largest of two is : " +x;
      
     }else
     {
        console.log("largest of two is : " +y);
        seven.innerHTML="<br>Largest of two is : " +y;
        
     }
}
