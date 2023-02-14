//step 1 : add click even handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email=='splashakash99@gmail.com' && password=='Akash925'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Wrong Email or Password');
    }
    
})