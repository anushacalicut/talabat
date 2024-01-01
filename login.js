const btn1=document.getElementById("btn1")
function e()
{
    const username=document.getElementById("username");
    const password=document.getElementById("password");
   
    const form=document.querySelector("form1");
    const inuser=document.getElementById("inuser");
    const inpass=document.getElementById("inpass");
    
    if(username.value.trim()===""){
        console.log("inner if");
        inuser.style.visibility="visible";
        document.getElementById("inuser").innerHTML="User name required";
    }
    if(password.value.length<4){
        inpass.style.visibility="visible";
        inpass.innerHTML="Password must be atleast 4 character";
    }
    if(password.value.length>10){
        inpass.style.visibility="visible";
        inpass.innerHTML="Password must be less than 10 character";
    }
}

btn1.addEventListener('click',()=>{e()});


var emailfield=document.getElementById("email1");
var error=document.getElementById("email");
function validate(){
    if(!emailfield.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.style.visibility="visible";
        error.innerHTML="Please enter valid mail id";
        return false;
}
    error.innerHTML="";
    return true;
}

const btn2=document.getElementById("btn2")
function e1()
{
    const username1=document.getElementById("username1");
    const password1=document.getElementById("password1");
    const password2=document.getElementById("password2");
    const user=document.getElementById("user");
    const pass1=document.getElementById("pass1");
    const pass2=document.getElementById("pass2");
    
    if(username1.value.trim()===""){
        // console.log("inner if");
        user.style.visibility="visible";
        document.getElementById("user").innerHTML="User name required";
    }
    if(password1.value!=password2.value){
        console.log(password1.value);
        console.log(password2.value);
        pass2.style.visibility="visible";
        pass2.innerHTML="Both password must be same";
    }
   
}

btn2.addEventListener('click',()=>{e1()});