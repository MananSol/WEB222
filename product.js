const uname = document.getElementById("Username");

uname.addEventListener("input", function (event)
{
    if (uname.validity.typeMismatch) 
    {
        email.setCustomValidity("I am expecting formatted username.!");
    }
    else 
    {
        email.setCustomValidity("");
    }
    }
);


function formValidation()
{
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") 
    {
      alert("Values must be filled out");
      return false;
    }
}


//////////



function checkForm() {
    var x = document.getElementById("uname").value;

    if (x.length < 6) 
    {
        document.getElementById("error").innerHTML = "Must be atleast 6 character";
        return false;

    }
     else if (x.search(/^[A-Za-z]\w{6,}$/) == -1)
      {
        document.getElementById("error").innerHTML = "Must start with alphabet";
        return false;

    } 
    else
     {
        document.getElementById("error").innerHTML = "";
        return true;
    }
}
