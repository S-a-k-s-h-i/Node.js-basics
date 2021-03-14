import { authFunction } from './requestxmlHttp.js';
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneno = document.getElementById('phoneno');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const serverError = document.getElementById('serverError');

form.addEventListener('submit',() => {
    event.preventDefault();
    validate()
})

const isEmail = (emailValue) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(emailValue) == true) 
        {
            return true;
        }
        return false;
}

const setErrorMsg = (input,errormsg) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className= 'form-control error'
    small.innerText = errormsg;
}

const setSuccessMsg = (input) => {
    const formControl = input.parentElement;
    formControl.className='form-control success';
}

const sendData = (userdata,srate,count) => {
     if(srate === count){
       console.log('calling',userdata);
        authFunction('post',userdata,serverError);
     }
}

const successMsg = (userdata) => {
    let formCon =document.getElementsByClassName('form-control');
    let count = formCon.length - 1;
    for(let i=0;i<formCon.length;i++){
        if(formCon[i].className === 'form-control success'){
            var srate = 0 + i;
            sendData(userdata,srate,count);
        }else{
            return false;
        }
    }
}


//defining validate function
const validate = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phonenoValue = phoneno.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    //Validating username
    if(usernameValue === '')
      setErrorMsg(username,'Username cannot be empty');
    else if(usernameValue.length < 3)
      setErrorMsg(username,'Username is too short . Minimum length is 3 characters.');
    else if(usernameValue.length > 10)
      setErrorMsg(username,'Username is too long . Maximum length is 10 characters.');
    else
      setSuccessMsg(username);

    //Validating email
    if(emailValue === '')
      setErrorMsg(email,'Email cannot be empty');
    else if(!isEmail(emailValue))
      setErrorMsg(email,'Email is not valid');
    else
      setSuccessMsg(email);

    //Validating phoneno
    if(phonenoValue === '')
     setErrorMsg(phoneno,'Phone no cannot be empty');
    else if(phonenoValue.length !== 10)
     setErrorMsg(phoneno,'Phone no is not valid');
    else
     setSuccessMsg(phoneno);

    //Validating password
    if(passwordValue === '')
     setErrorMsg(password,'password cannot be empty');
    else if(passwordValue.length < 6)
     setErrorMsg(password,'minimum 6 characters');
    else
     setSuccessMsg(password);

    //Validating confirm password
    if(cpasswordValue === '')
     setErrorMsg(cpassword,'password cannot be empty');
    else if(passwordValue !== cpasswordValue)
     setErrorMsg(cpassword,'password is not matching');
    else{
     setSuccessMsg(cpassword);
    }
    const userdata={
      name:usernameValue,	
      email:emailValue,
      phone:phonenoValue,
      password:passwordValue
    }
    //Success
    successMsg(userdata);

}