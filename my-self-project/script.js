const header=document.querySelector('header');
const manuBtn=document.querySelector('#menuBtn');
const closeBtn=document.querySelector('#closeBtn');

manuBtn.addEventListener('click' , ()=>{
  header.classList.toggle('show-mobile-menu')
});

closeBtn.addEventListener('click' , ()=>{
  manuBtn.click();
})