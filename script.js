'use strict'
const slides = document.querySelectorAll('.slide')

const btnLeft = document.querySelector('.left-arrow')
const btnRight = document.querySelector('.right-arrow')
const slider = document.querySelector('.slider')
let curSlide = 0
const maxSlide = slides.length



const goToSlide = function(slide){
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
   
}

goToSlide(0)

const nextSlide = function(){
    if(curSlide === maxSlide - 1){
        curSlide = 0
    }else{
     curSlide++
    }
    goToSlide(curSlide)
}
const prevSlide = function(){
    if(curSlide === 0){
        curSlide = maxSlide - 1
    }
    else {
        curSlide--
    }

goToSlide(curSlide)
}
btnRight.addEventListener('click', function(e){
    nextSlide()
    e.stopPropagation()
})
btnLeft.addEventListener('click', prevSlide)
