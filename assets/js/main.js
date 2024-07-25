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
    
    
    
    // code for draggable section
    const draggable = $("a[href='#draggable']");
    draggable.click(function(){
        if(window.innerWidth < 768){
            nav.slideUp();
        }
        $('section').slideUp();
        $('section#draggable').slideDown();
    })
    $(".app").draggable();
    // End code for draggable section


    // code for droppable section 
    const droppable = $("a[href='#droppable']");
    droppable.click(function(){
        if(window.innerWidth < 768){
            nav.slideUp();
        }
        $('section').slideUp();
        $('section#droppable').slideDown();
    })
    $('.result').draggable();

    $( ".sum" ).droppable({
        drop: function( event, ui ) {
            console.log('dropped');
            const val = ui?.draggable[0];
            if(val.innerText == 30){
                console.log(val.innerText)
                  val.style.background = '#0f0';
                  $('#sum').draggable('disabled')
            }else{
                val.style.background = '#f00';
            }
        
        }
    });
    $( ".diff" ).droppable({
        drop: function( event, ui ) {
            console.log('dropped');
            const val = ui?.draggable[0];
            if(val.innerText == 5){
                console.log(val.innerText)
                  val.style.background = '#0f0';
                  $('#diff').draggable('disabled')
            }else{
                val.style.background = '#f00';
            }
        
        }
    });
    $( ".mul" ).droppable({
        drop: function( event, ui ) {
            console.log('dropped');
            const val = ui?.draggable[0];
            if(val.innerText == 80){
                console.log(val.innerText)
                  val.style.background = '#0f0';
                  $('#mul').draggable('disabled')
            }else{
                val.style.background = '#f00';
            }
        
        }
    });
    $( ".div" ).droppable({
        drop: function( event, ui ) {
            console.log('dropped');
            const val = ui?.draggable[0];
            if(val.innerText == 11){
                console.log(val.innerText)
                  val.style.background = '#0f0';
                  $('#div').draggable('disabled')
            }else{
                val.style.background = '#f00';
            }
        
        }
    });  
    // End code for droppable section 



    // code for resizable section 
    const resizable = $("a[href='#resizable']");
    resizable.click(function(){
        if(window.innerWidth < 768){
            nav.slideUp();
        }
        $('section').slideUp();
        $('section#resizable').slideDown();
    })
    $( "#resizable img" ).resizable();
    // End code for resizable section 
    
    
    // code for selectable section 
    const selectable = $("a[href='#selectable']");
    selectable.click(function(){
        if(window.innerWidth < 768){
            nav.slideUp();
        }
        $('section').slideUp();
        $('section#selectable').slideDown();
    })
    $( "#selectable ol" ).selectable();
    // End code for selectable section 
    
    
    // code for sortable section 
    const sortable = $("a[href='#sortable']");
    sortable.click(function(){
        if(window.innerWidth < 768){
            nav.slideUp();
        }
        $('section').slideUp();
        $('section#sortable').slideDown();
    })
    $( "#sortable ol" ).sortable();
    // End code for sortable section 



    const accordian = $("a[href='#accordian']");
    accordian.click(function(){
        if(window.innerWidth < 768){
            nav.slideUp();
        }
        $('section').slideUp();
        $('section#accordion').slideDown();
    })
    $('section#accordion #accordion-section').accordion();

})