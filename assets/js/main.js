$(function(){

  $('.membership-list .membership-item a').click(function(e){
    e.preventDefault();
  
    targetNav = $(this).attr('href');
  
    $('.membership-item a').removeClass('active');
    $(this).addClass('active');
    $(targetNav).addClass('active').siblings().removeClass('active');
  });


  $('.qna-title').click(function(e){
    e.preventDefault();
   
    $(this).addClass('on');

    $(this).toggleClass('on').siblings('.depth2').slideToggle();//열려라
  });  

})//end
