$(document).ready(function(){
    $(".nav-item").click(function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    $("#toggler").click(function() {
        $('#wrap').toggleClass('toggled');
    
       
        var left = $('.sidebar').css("left"); 
        if (left == '0px') 
        {
            $('.sidebar').css({ 'left': '-17rem' });
            $('.overflow').css({ 'display': 'none' });
            $('.main-row .content').css({ 'padding-left': '70px' });  
        }
        else { 
            $('.sidebar').css({ 'left': '0' });
            $('.overflow').css({ 'display': 'block' }); 
            $('.main-row .content').css({ 'padding-left': '180px' }); 
        }
    
    });
    $(".overflow").click(function(){
        $('.sidebar').css({ 'left': '-17rem' });
        $('.overflow').css({ 'display': 'none' });
        $('.main-row .content').css({ 'padding-left': '70px' });
    });

    
})

