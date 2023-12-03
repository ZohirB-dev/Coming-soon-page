const form = document.querySelector('form');
const button = document.querySelector('#button');
const submit = document.querySelector('#email')
const error = document.querySelector('.description');


button.addEventListener('click', function(e){
    e.preventDefault()
    const input = submit.value;
    console.log(input);
    validateForm(input);
    
})

function validateForm(email){

    let emailStructure = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailStructure.test(email)){
        console.log("valid email");
        submit.style.border = "1px green solid";
        error.textContent= "Email recognised";
        error.style.color = "green";

    } else if(email === ""){ 
        console.log('invalid email');
        submit.style.border = "1px solid red";
        error.textContent= "Whoops! It looks like you forgot to add your email";
    } else {
        console.log('invalid email');
        submit.style.border = "1px solid red";
        error.textContent = "Please provide a valid email address";
    }
}
