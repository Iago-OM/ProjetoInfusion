(function(){

let $body = document.querySelector('body');

$body.classList.remove('no-js');
$body.classList.add('js');

let $btnMenu = document.querySelector('.header__btnMenu');
$btnMenu.removeAttribute('style');

$btnMenu.addEventListener('click', openMenu);

function openMenu(){
$body.classList.toggle('js');

}


const $laptopSlide = document.querySelector('.laptop-slider');
    $laptopSlide.style.overflow = 'hidden'; 

const $corpo = document.querySelector('body');

  
const $show = document.querySelector('.figure__img');
  
   
const $btnPrev = document.querySelector('.prev');
    $btnPrev.style.color = 'white';
    $btnPrev.style.float = 'left' ;
    $btnPrev.addEventListener('click', nextFigure);


const $btnNext = document.querySelector('.next')
    $btnNext.style.color = 'white';
    $btnNext.style.float = 'right';
    $btnNext.addEventListener('click', nextFigure);
    let numberImg = 2;
function nextFigure(){
  $show.setAttribute('src', `img/slider/slide-0${numberImg}.png`)

  if (numberImg === 1) {
    return numberImg = 2;

    
  }else{ if (numberImg === 2) {
    return numberImg = 1;
   }}
}









})()