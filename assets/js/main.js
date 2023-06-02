// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`Something went, make sure that ${selector} exixts or is type correctely`)
}

// console.log(selectElement('.navbar'));

//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }else{
            headerElement.classList.remove('activated')
        }
};
window.addEventListener('scroll', scrollHeader);
// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = ()=>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);
// Open/Close search form popup
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');

formOpenBtn.addEventListener('click',()=> searchFormContainer.classList.add('activated'));
formCloseBtn.addEventListener('click',()=> searchFormContainer.classList.remove('activated'));

// -- Close the search form popup on ESC keypress
window.addEventListener('keyup',event =>{
    if(event.key=== 'Escape') searchFormContainer.classList.remove('activated')
})
// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');


if(currentTheme){
    bodyElement.classList.add('light-theme');
}


themeToggleBtn.addEventListener('click', ()=>{
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'themeActive');
    }else{
        localStorage.removeItem('currentTheme');
    }
});
// Swiper

const swiper = new Swiper('.swiper',{
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3
        }
    }
})


// Code snippet

document.addEventListener('DOMContentLoaded', () => {
    // hljs.initHighlightingOnLoad();
  
    const codeBlock = document.getElementById('code');
    const copyButton = document.getElementById('copy-button');
    const copySuccess = document.getElementById('copy-success');
  
    const copyTextHandler = () => {
      const text = codeBlock.innerText;
  
      // first version - document.execCommand('copy');
      // var element = document.createElement('textarea');
      // document.body.appendChild(element);
      // element.value = text;
      // element.select();
      // document.execCommand('copy');
      // document.body.removeChild(element);
  
      // copySuccess.classList.add('show-message');
      // setTimeout(() => {
      //   copySuccess.classList.remove('show-message');
      // }, 2500);
  
      //   second version - Clipboard API
      navigator.clipboard.writeText(text).then(
        () => {
          copyButton.innerHTML = "Copied!";
          setTimeout(() => {
            copyButton.innerHTML = "Copy";
          }, 1000);
          // copySuccess.classList.add('show-message');
          // setTimeout(() => {
          //   copySuccess.classList.remove('show-message');
          // }, 2500);
        },
        () => {
          console.log('Error writing to the clipboard');
        }
      );
    };
  
    copyButton.addEventListener('click', copyTextHandler);
  });