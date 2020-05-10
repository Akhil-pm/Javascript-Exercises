function getArray3()
{
    var four=document.getElementById("four");
    var output='';
     let len=prompt("Enter number of elements :");
     let array=[];
     for(let i=1;i<=len;i++)
     {
         array[i]=prompt("Enter  element "+ i +" :");
     }
     console.log("Elements are:");
     output +="<br>Elements are : "
     for(let i=1;i<=len;i++)
     {
         console.log(array[i]);
         output += array[i]+' '
     }
// -----------finding square-----------
        let square=0;
        for(let i=1;i<=len;i++)
        {
          square += array[i]*array[i];
        }
          console.log("Sum of squares of the elements is : " +square);
          output +="<br>Sum of squares of the elements is : " +square;
          four.innerHTML=output;
 
}
