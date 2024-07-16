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


    // interaction

    // all section are hide 
    $('section').hide();

    const draggable = $("a[href='#draggable']");
    draggable.click(function(){
        if(window.innerWidth < 768){
            nav.slideUp();
        }
        $('section').slideUp();
        $('section#draggable').slideDown();
    })




    // code for draggable section
    $(".app").draggable();
    // End code for draggable section
})