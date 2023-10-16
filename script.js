let password=document.querySelectorAll('.pass')
let form=document.querySelector('.form')
form.addEventListener('submit',()=>{
    if(password[0].value!=password[1].value){
        password[0].classList.add('error')
        password[1].classList.add('error')
        event.preventDefault()
    }
    else{
        password[0].classList.remove('error')
        password[1].classList.remove('error')
    }
})