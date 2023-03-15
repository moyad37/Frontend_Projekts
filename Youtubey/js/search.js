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
            $('.videos-menu').css({ 'padding-left': '0' });  
        }
        else { 
            $('.sidebar').css({ 'left': '0' });
            $('.overflow').css({ 'display': 'block' }); 
            $('.videos-menu').css({ 'padding-left': '200px' }); 
        }
    
    });
    $(".overflow").click(function(){
        $('.sidebar').css({ 'left': '-17rem' });
        $('.overflow').css({ 'display': 'none' });
        $('.videos-menu').css({ 'padding-left': '0' });
    })

    $(".filter").click(function(){
        $(".filter-menu").toggle();
    });

    $("input:checkbox").click(function(){
        var $box = $(this);

        if($box.is(":checked")){
            var group = "input:checkbox[name='"+$box.attr("name")+"']";
            $(group).prop("checked" , false);
            $box.prop("checked" , true);
        }
    });
});