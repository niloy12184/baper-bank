document.getElementById("btn-submit").addEventListener('click', function(){
    const emailField =document.getElementById('user-email');
    const email = emailField.value;
    const passwordField =document.getElementById("user-password");
    const password = passwordField.value;
    if(email === 'mrn@gmail.com' && password ==='mrnbank'){
        window.location.href ="money.html";
    }else{
        alert('tore ami breckup korlam')
    }
})