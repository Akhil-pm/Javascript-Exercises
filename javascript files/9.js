function pattern1() 
{
    // let string="Javascript";
    // var nine=document.getElementById("nine");
    // var output='';
    // for (let i = 1; i <= string.length; i++) 
    // {
  
    //     console.log(string.substring(0,i));;
    //     output += "<br>" +string.substring(0,i)
    // }
    // nine.innerHTML=output;



// -------------- USING For...Of Loop -----------

    let string=["J","Ja","Jav","Java","Javas","Javasc","Javascr","Javascri","Javascrip","Javascript"];
    var nine=document.getElementById("nine");
    var output='';
    for (let i of string) 
    {
        console.log(i);;
        output += "<br>" + i;
    }
    nine.innerHTML=output;

  }
  
  