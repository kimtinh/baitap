function getInfo(event){
    console.clear();
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log("name: ", name)
    console.log("email: ",email);
    console.log("password: ",password);
    const reg = /^\w+@[a-zA-Z]{3,}\.com$/i;
    
    if (name === "") {
        document.getElementById("errorname").innerHTML="Wrong Name";
        document.getElementById("name").style.borderColor = "#dc3545"
    }
    else {
        document.getElementById("errorname").innerHTML="";
    }
    if (reg.test(email) === false) {
        console.log(reg.test(email));   
        document.getElementById("erroremail").innerHTML="Wrong Email";
        document.getElementById("email").style.borderColor = "#dc3545";
     } 
    else{
         console.log(reg.test(email));
         document.getElementById("erroremail").innerHTML=""; 
    };
    if (password.length <8)
    {
        document.getElementById("errorpass").innerHTML=" Password is at least 8 characters";
        document.getElementById("password").style.borderColor = "#dc3545";
    }
    else {
        document.getElementById("errorpass").innerHTML="";
    }
}
    