const form = document.getElementById('main-form');
let passwordA = document.getElementById('passwordA');
let passwordB = document.getElementById('passwordB');
let span = document.getElementById('error-span');

form.addEventListener('submit', e =>{
    if(passwordA.value !== passwordB.value){
        e.preventDefault();
        span.innerText = '*Password does not match';
        passwordA.classList.add('border-danger');
        passwordB.classList.add('border-danger');
    } else {
        span.innerText = '';
        passwordA.classList.remove('border-danger');
        passwordB.classList.remove('border-danger');
        e.preventDefault();
        alert(`Account Creation Succesful`);
        form.reset();
    }
   
});

passwordA.addEventListener('focus', e => {
    span.innerText = '';
    passwordA.classList.remove('border-danger');
    passwordB.classList.remove('border-danger');
})