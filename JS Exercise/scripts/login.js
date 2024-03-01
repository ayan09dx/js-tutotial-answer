function checkLoginStatus(){
    let status=sessionStorage.getItem('loggedin');
    if(status){
        window.location.href='./calculator.html';
    }
}



function checkFormInput(e){
e.preventDefault();
let username=document.getElementById('username');
let password=document.getElementById('password');
let usererror=document.getElementById('usererror');
let passworderror=document.getElementById('passworderror');
if(username.value==''){
    usererror.style.display='block';
}
else if(password.value==''){
    passworderror.style.display='block';
}
else{
    Login(username.value,password.value);
}
}

function resetError(){
    let username=document.getElementById('username');
    let password=document.getElementById('password');
    let usererror=document.getElementById('usererror');
    let passworderror=document.getElementById('passworderror');
    if(!username.value==''){
        usererror.style.display='none';
    }
    if(!password.value==''){
        passworderror.style.display='none';
    }
}


function Login(username,password){
    let loginerror=document.getElementById('loginerror');
    if(username==='test' && password==='test'){
        sessionStorage.setItem('loggedin',true);
        window.location.href='./calculator.html'
    }
    else if(username!=='test'){
        loginerror.innerHTML="username is wrong.Please try again";
        loginerror.style.display='block';
    }
    else{
        loginerror.innerHTML="password is wrong.Please try again";
        loginerror.style.display='block';
    }

}