function pattern2() 
{
  var ten=document.getElementById("ten");
  var output='';
    for (let i = 1; i <= 4; i++) 
    {
      let row = '';
  
      for (let j = 1; j <= i; j++) 
      {
        row += '* ';
      }
  
      console.log(row);
      output += "<br>"+row;
    }
    ten.innerHTML=output;
  }
  
 