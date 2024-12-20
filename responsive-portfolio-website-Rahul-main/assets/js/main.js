/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle)
{
navToggle.addEventListener('click',() =>{
    navMenu.classList.add('show-menu')
})

}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose)
{
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
        }
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className ='skills__content skills__close'
    }
  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}    

skillsHeader.forEach((el) =>{
   el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')


        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})      

/*==================== SERVICES MODAL ====================*/
// const modalViews = document.querySelectorAll('.services__modal'),
//     modalBtns = document.querySelectorAll('.services__button'),
//     modalcloses = document.querySelectorAll('.services__modal-close')

// let modal = function(modalClick){
//     modalViews[modalClick].classList.add('active-modal')
// }

// modalBtns.forEach((modalBtn, i) => {
// modalBtn.addEventListener('click', () =>{
//     modal(i)
//    })
// })

// modalcloses.forEach((modalClose) => {
//     modalClose.addEventListener('click',() => {
//      modalViews.forEach((modalView) => {
//         modalView.classList.remove('active-modal')
//      })
//     })
// })

/*==================== PORTFOLIO SWIPER  ====================*/
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.portfolio__container', {
        cssMode: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        mousewheel: true,
    });
});


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== SHOW SCROLL UP ====================*/ 
function scrollup(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*==================== CONTACT MAIL JS ====================*/

function sendMail() {
    emailjs.init("P3tnh-vWA5gtTyhO0"); // Replace with your EmailJS public key

    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_ind2tmx"; // Replace with your EmailJS service ID
    const templateID = "template_wl60pdg"; // Replace with your EmailJS template ID

    emailjs
      .send(serviceID, templateID, params)
      .then((response) => {
        console.log("Success!", response.status, response.text);
        alert("Your message was sent successfully!");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  }
  
/*==================== ANIMATION JS ====================*/
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("loaded");

    // Section animation on scroll (both down and up)
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        },
        { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
});

// Change header style on scroll
window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
    } else {
        header.classList.remove("scroll-header");
    }
});
