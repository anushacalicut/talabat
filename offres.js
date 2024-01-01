const multipleItemCarousel = document.querySelector('#carouselExampleControls');

if(window.matchMedia("(min-width:576px)").matches){

    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false,
       
      })

    var carouselwidth = $('.carousel-inner')[0].scrollWidth;
    var cardwidth=$('.carousel-item').width();
    var scrollPosition=0;
    jQuery.noConflict();
    $('.carousel-control-next').on('click',function(){
        if(scrollPosition<(carouselwidth-(cardwidth*4))){
            console.log('next');
            scrollPosition=scrollPosition+cardwidth;
            $('.carousel-inner').animate({scrollLeft:scrollPosition},600);
        }
    
    
    });
    $('.carousel-control-prev').on('click',function(){
        if(scrollPosition>0){
            console.log('prev');
            scrollPosition=scrollPosition-cardwidth;
            $('.carousel-inner').animate({scrollLeft:scrollPosition},600);
        }
    
    
    });
}
else{
    
    $(multipleItemCarousel).addClass('slide');
}
