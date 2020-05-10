function getArray1()
{
   var one=document.getElementById("one");
   var output='';
    var len=prompt("Enter number of elements :");
    var array=[];
    for(var i=1;i<=len;i++)
    {
        array[i]=prompt("Enter  element "+ i +" :");
    }
    console.log("Elements are:");
    output +="Elements are : "
    for(var i=1;i<=len;i++)
    {
        console.log(array[i]);
        output += array[i]+' '
    }


// ----------checking prime------------

    var n=array[1], flag=0;;

    if (n == parseInt(1)) 
    {
        output +="<br>First element 1 is neither prime nor composite."
        console.log("1 is neither prime nor composite.");
    }

    else
    {
      
      for (var i = 2; i <= n / 2; i++) 
      {
        if (n % i == 0) 
        {
            output +="<br>First element "+n +" is not prime"
            console.log("first element "+n +" is not prime");    
            flag = 1;
            break;
        }
     }
     if(flag==0) 
     {
       console.log("first element "+n+" is prime");   
       output +="<br>First element "+n +" is prime"  
     }
    }
    one.innerHTML=output;
}



