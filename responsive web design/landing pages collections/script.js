


const form = document.getElementById('form');
const username= document.getElementById('usermame');
const email = document.getElementById('email');
const password= document.getElementById('password');
const password2= document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue  = email.value.trim();
    const passwordValue  = password.value.trim();
    const password2value =  password2.value.trim();

    if(usernameValue === '') {
        //show error
        //add error class
setErrorFor(username, 'username cannot be blank');
    }   else{
        //add success class
setSuccessFor(username);
        }
    }


function setErrorFor(input, message){
    const formControl = input.parentElement; // .fomr-control
    const small = formcontrol.querySelector('small');

//add error message inside small
    small.innerText = message;
 
    //add  error class
    formControl.className = 'form-control error';
} 

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}
