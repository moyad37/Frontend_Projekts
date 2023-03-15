$(document).ready(function(){
    $(".nav-item").click(function() {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });


    $(".main-button").click(function(){
        $(".main-dropdown-menu").toggle()
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
    })

    /* $("read-more").on("click", function(){
        read();
    }); */

    $(document).ready(function(){	
        $(".more").hide();
        $(".read-more").click(function(){
            $(".more").slideToggle("slow");
            if($(this).text()=="read sell"){
                $(this).text("read more");
                $(".dots").css({
                    'display':'inline'
                });

            }else{
                $(this).text("read sell");
                $(".dots").css({
                    'display':'none'
                });

            }
        });


    });

    $(".reply").click(function(){
        $(this).parents("div.row").next(".card-inner").toggle();
    });

});

/* function read(){
    var dots = document.getElementsByClassName("dots");
    var more = document.getElementsByClassName("more");
    var readMore = document.getElementsByClassName("read-more");

    if(dots.style.display === "none"){
    dots.style.display="inline";
    readMore.innerHTML="read more";
    more.style.display="none";
    }else{
    dots.style.display="none";
    readMore.innerHTML="read less";
    more.style.display="inline";
    }
}   
 */


