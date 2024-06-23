
//load

window.onload = function() {
    setTimeout(function() {
        $('#preload').fadeOut();
        //$('body').removeClass('hidden');
    }, 850); // 5000 milisegundos = 5 segundos
};





//icon menu


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

//Navbar scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () =>{

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height) {
            //active navbar links 

            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id + ']').classList.add('active');
            });
            //active sections for animatios on scroll

            sec.classList.add('show-animate');
        }
        
        else{
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')


}

//email js

const contactForm = document.getElementById('contact-form'),
      ContactMessage = document.getElementById('message')

const senEmail = (e) =>{
    e.preventDefault()

    //service ID -templateId #form -publicKey

    emailjs.sendForm('service_exxzuh7', 'template_wtg4dho', '#contact-form', '6nWj1p2ujgOQpOB7C')
        .then(()=>{
            //Send message
            ContactMessage.textContent ='Thank you, I will contact you shortly. ✅'

            //Remove message after seconds

            setTimeout(()=>{
                ContactMessage.textContent = ''
            }, 5000)

            //clean inputs

            contactForm.reset()

        }, ()=>{
            //show error message
            ContactMessage.textContent = 'Upps, se presentó un error ❌'
        })
}   

contactForm.addEventListener('submit', senEmail)

//lenguage

const check = document.querySelector(".check");

check.addEventListener("click", lenguage);

function lenguage(){
    let id = check.checked;
    if(id==true){
        location.href = "../index_sp.html"; 
    } else{
        location.href = "../index.html"; 
    }
}
