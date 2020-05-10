function getArray4()
{
    var eight=document.getElementById("eight");
    var output='';
    let len=prompt("Enter number of elements :");
    let array=[];
    for(let i=0;i<len;i++)
    {
        array[i]=prompt("Enter  name "+ (i+1) +" :");
    }
    console.log("Elements are:");
    output +="<br>Elements are : "
    for(let i in array)
    {
        console.log(array[i]);
        output += array[i]+' '
    }

    var sortedArray = array.sort(function (a,b)
    {
        var x=a.toLowerCase(), y=b.toLowerCase();
        if(x > y)
            return 1;
        if(x < y)
            return -1;
        else
            return 0;
    })
      console.log("sorted array:");
      console.log(sortedArray);
      output +="<br>Sorted Array : " +sortedArray;
      eight.innerHTML=output;
}
 
