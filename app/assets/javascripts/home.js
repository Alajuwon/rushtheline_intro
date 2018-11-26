$('#toggle').click(function() {
  $('.circle-loader').toggleClass('load-complete');
  $('.checkmark').toggle();
});

  $(document).ready(function(){

     var checkScrollBar = function(){
       $('#tip-top-nav').css({
         backgroundColor: $(this).scrollTop() > 1 ?
           '#fd4437' : 'transparent'
       })
     }
     $(window).on('load resize scroll', checkScrollBar)
     });