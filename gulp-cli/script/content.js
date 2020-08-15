/* video */
$(document).scroll(function () { 
   let vTop = $('.media').offset().top-$(document.documentElement).scrollTop();
   var vw = $('video').width();
   if(vTop<15&&vTop>10){
    $(document.documentElement).scrollTop(1007);
   }
   if(vTop<=10){
       $('.playBtn').css('display','block');
       $('video').stop(true).animate({
         width:'1680',
       });  
       var video = $('video')[0];
       video.play();
   }
   if(vTop>10){
        $('.playBtn').css('display','none');
        $('video').stop(true).animate({
            width:'1200',
          }); 
        var video = $('video')[0];
        video.pause();  
   }
}); 
//palyer
$('.play').click(function () { 
    $('.play').css('display','none');
    $('.pause').css('display','block');
    var video = $('video')[0];
    video.play();
    video.loop=true;
 });
 $('.pause').click(function () { 
    $('.pause').css('display','none');
    $('.play').css('display','block');
    var video = $('video')[0];
    video.pause();
 });


/* brand--left */
$('.info_l').mouseenter(function () { 
    var $temp = $(this);
    $temp.css('cursor','pointer');
    $('.info_l .bto_line').stop(true).animate({
        width:"100%",
        speed:300
    });
    $('.p_1').css('color','#0c5ca8');
    $('.p_2').css('color','#0c5ca8');
});
$('.info_l').mouseleave(function () { 
    $('.info_l .bto_line').stop(true).animate({
        width:"60px",
        speed:300
    });
    $('.p_1').css('color','#000000');
    $('.p_2').css('color','#000000');
});
/* brand--right */
$('.info_r_t').mouseenter(function () { 
    var $temp = $(this);
    $temp.css('cursor','pointer');
    var $temp1=$temp.children('.bto_line');
    $temp1.stop(true).animate({
        width:"100%",
        speed:300
    });
});
$('.info_r_t').mouseleave(function () { 
    var $temp = $(this).children('.bto_line');
    $temp.stop(true).animate({
        width:"60px",
        speed:300
    });
});