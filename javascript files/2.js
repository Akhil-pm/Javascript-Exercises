function getArray2()
{
let max = 0, item;
let array=[];
var two=document.getElementById("two");
var output='';
 let len=prompt("Enter number of elements :");
 for(let i=1;i<=len;i++)
    {
        array[i]=prompt("Enter  element "+ i +" :");
    }
    console.log("Elements are :");
    output +="Elements are : "
    for(let i=1;i<=len;i++)
    {
        console.log(array[i]);
        output += array[i]+' '
    }

   //  ------------finding most frequent----------

for (let i = 0; i < array.length; i++ ) 
{
 let count = 0;
 for (let j = 0; j < array.length; j++ ) 
 {
   if (array[i] == array[j]) 
   {
   count++;
   }
  }
 if (max < count) 
 { 
    max = count; 
    item = array[i]; 
 }
}
console.log(item + ' occur ' + max + ' times' );
output +="<br>"+item +  " occur " + max + " times";
two.innerHTML=output;
}