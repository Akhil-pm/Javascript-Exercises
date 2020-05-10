function getStr()
{
    var three=document.getElementById("three");
    var output='';
    let string=document.getElementById("str").value;
    output +="<br>String: "+string;
    var newStr= caseChange(string);
    console.log("Uppercase and lowercase swapped : ",newStr)
    output +="<br>Uppercase and lowercase swapped :  "+newStr;
    three.innerHTML=output;

}

function caseChange(str)
{
let newstr = [];
    for(let i = 0; i < str.length; i++)
    {
            if(str[i] == str[i].toUpperCase())
            {
                
                newstr.push(str[i].toLowerCase());
               
            }
            else
            {
                newstr.push(str[i].toUpperCase());
                
            }
            
        }
        return newstr.join("");
    }

