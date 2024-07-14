$(document).ready(function(){
    const nav = $('nav');
    const bars = $('header .fa-bars');
    const xMark = $('nav .fa-xmark');


    bars.click(function(){
        nav.slideDown();
    })
    
    xMark.click(function(){
        nav.slideUp();
    })
})