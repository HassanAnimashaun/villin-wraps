document.addEventListener('DOMContentLoaded', function(){

    const openBtn = document.querySelector('#open-cta');
    const formContainer = document.querySelector('.form-container');
    const socialContainer = document.querySelector('.socials-container');

    openBtn.addEventListener('click', function() {

        if(formContainer.style.display === 'none' || formContainer.style.display === '' ){
            formContainer.style.display = 'flex';
            socialContainer.style.display = 'flex'
            console.log("shown");  
        }else{
            formContainer.style.display = 'none';
            socialContainer.style.display = 'none';
            console.log("hidden");
        }
    });


});

