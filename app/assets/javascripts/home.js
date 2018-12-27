  $(document).ready(function(){

     var checkScrollBar = function(){
       $('#tip-top-nav').css({
         backgroundColor: $(this).scrollTop() > 1 ?
           '#b80720' : 'transparent'
       })
     }
     $(window).on('load resize scroll', checkScrollBar)
     });
