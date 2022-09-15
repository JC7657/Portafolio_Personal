// Owl Carousel Script
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    dots:true,
    dotsEach: 1,
    navigation:true,
    autoPlay: 1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
});
//Skill Icons Click Animation
$(".skill-img").mousedown(function(event) {
  $(event.target).addClass("skill-img-rotated");
})

$(".skill-img").mouseup(function(event) {
  $(event.target).removeClass("skill-img-rotated");
})
// Tooltip script
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
