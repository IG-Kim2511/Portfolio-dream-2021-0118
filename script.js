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


//  js 60 handle scrolling when tapping on the navbar menu. js scroll to id
/* click event

dataset*/

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click',(e)=>{
console.log(e.target)
console.log(e.target.dataset.link)

const scrollTo = document.querySelector(link);
scrollTo.scrollIntoView({behavior:'smooth'});


if(link ==null){
  return;

}
navbarMenu.classList.remove('open');

});

// js 60_2 contact me
 /* scrollintoview'
 menu
 selector
  */

  const homeContactBtn = document.querySelector('.home__contact');

  homeContactBtn.addEventListener('click',()=>{
    scrollIntoView(#contact);
  });



 //js 90 show arrow up 

 /* document.addEventListener('scroll',()=>{
   const arrowUp = document.querySelector('.arrow-up');

   if(scrollY>homeHeight/2){
    arrowUp.classList.add('visible');
  }else{
     arrowUp.classList.remove('visible');

   }
 }); */


//  js 72 remove selection from the previous item and select the next selection

const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener('click',(e)=>{
  const filter = e.target.dataset.filter || e.target.parentsNode.dataset.filter;


  if(filter == null){
    return;

  }
  // 68-2 forEach

  projects.forEach((project)=>{
    console.log(project.dataset.type);
    
    if (filter ==="" || filter === project.dataset.type) {
      project.classList.remove('invisible');
      
    } else {
      project.classList.add('invisible');
      
    }
  });

  // js 70
});