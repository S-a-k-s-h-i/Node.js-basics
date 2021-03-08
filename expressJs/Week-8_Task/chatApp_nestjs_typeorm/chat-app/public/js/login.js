const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

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

const sendData = (usernameValue,srate,count) => {
if(srate === count){
 alert(`Registration successfull. Welcome ${usernameValue}`);
}
}

const successMsg = (usernameValue) => {
console.log('success msg');
let formCon =document.getElementsByClassName('form-control');
let count = formCon.length - 1;
for(let i=0;i<formCon.length;i++){
if(formCon[i].className === 'form-control success'){
    console.log('inside for');
    var srate = 0 + i;
    console.log(srate);
    sendData(usernameValue,srate,count);
}else{
    return false;
}
}
}

const validate = () => {

const emailValue = email.value.trim();
const passwordValue = password.value.trim();

//Validating email
if(emailValue === '')
setErrorMsg(email,'Email cannot be empty');
else if(!isEmail(emailValue))
setErrorMsg(email,'Email is not valid');
else
setSuccessMsg(email);

//Validating password
if(passwordValue === '')
setErrorMsg(password,'password cannot be empty');
else if(passwordValue.length < 6)
setErrorMsg(password,'minimum 6 characters');
else
setSuccessMsg(password);
}