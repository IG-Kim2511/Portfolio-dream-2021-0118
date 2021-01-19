"use strict";



//  C 58 . JS 58 
// s how navbar  with scroll (make navbar transparne t when it is on the top)

//  height
 /* 
 google ; js scroll position scrollY

 scrolly window.scrollY
 1. window.scroll y navbarHeight 
 'navbar--dark  add
 remove

 navbar--dark

 */

 const navbar = document.querySelector('#navbar');
 const navbarHeight = navbar.getBoundingClientRect().height;

 document.addEventListener('scroll',()=>{
   if (window.scrollY>navbarHeight) {
     navbar.classList.add('navbar--dark');
     
   } else {
    navbar.classList.remove('navbar--dark');
   }
 });


//  js 72 remove selection from the previous item and select the next selection

const workBtnContainer = document.querySelector('.work__categories');

workBtnContainer.addEventListener('click',(e)=>{
  
const active = document.querySelector('.category__btn.selected');
if(active != null){
  active.classList.remove('selected');

}
e.target.classList.add('selected');

});
