document.getElementById("btn-submit").addEventListener('click',function(){
    const emailValue =document.getElementById('email-values').value;
    const passwordValue =document.getElementById('pass-value').value;

    emailValue.value='';
    passwordValue.value='';
    
    if(emailValue==='lemonroy@email.com' && passwordValue==='lemon roy'){
        window.location=('http://127.0.0.1:5500/calculation/index.html')
    }else{
        alert('you invalid password are email addreass')
    }
})