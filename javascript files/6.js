function getStr1()
{
  var six=document.getElementById("six");
  var output='';
  let string=document.getElementById("str1").value;
  var limit=document.getElementById("Limit").value;;
  // output +="<br>Orginal String : "+string;
  let newString=truncateString(string,limit);
  console.log("After truncating : ",newString);
  output +="<br>After truncating : "+newString;
  six.innerHTML=output;
}

function truncateString(str, num) 
{
    if (str.length <= num) 
    {
      return str
    }
    else
    {
    return str.slice(0, num);
    }
  }