const contactMessage = document.getElementById('message'),
      contactEmail = document.getElementById('email'),
      contactButton = document.getElementById('button');
      
const emailPattern = document.querySelector('.input').getAttribute('pattern');

contactButton.addEventListener('click',function(){
    if(contactEmail.value !== emailPattern){
        contactMessage.classList.add('invisible');
        contactEmail.classList.add('input');
        contactMessage.textContent = 'Please provide a valid email address'
    }
})