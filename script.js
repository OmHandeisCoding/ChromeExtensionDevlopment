const text_area = document.getElementById("text_area");
const save_btn = document.getElementById("save_btn");

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

let stored_string = localStorage["stored_string"];
if(stored_string==null)
{
    stored_string="";
    
}

text_area.value = stored_string;

save_btn.onclick=()=>{

    localStorage["stored_string"] = text_area.value;
}

clear_btn.onclick=()=>{

    localStorage["stored_string"] = "";
    text_area.value = localStorage["stored_string"];
}

lower_btn.onclick=()=>{

   Mix_str = text_area.value;
   result = Mix_str.toLowerCase();
   //localStorage["stored_string"] = result;
   text_area.value = result;
}

rev_btn.onclick=()=>{

    str = text_area.value;
    //result = Mix_str.toLowerCase();
    //localStorage["stored_string"] = result;
    result =  reverseString(str) ;
    text_area.value =  result;

   
 }

 Valid_Email_btn.onclick=()=>{

    mail = text_area.value;
    
    result =  ValidateEmail(mail) ;

    if(result)
    {
        text_area.value =  "VALID";
    }
    else{
        text_area.value =  "NOT VALID";
    }
    

   
 }



 
