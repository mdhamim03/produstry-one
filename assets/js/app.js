$(function(){
    let toggleBtn = $(".myToggleBtn");
    toggleBtn.click(function(){
        //PRIMEARY MENU
        let menu =$("nav #my_cusustomNav ul");
        menu.toggleClass("active");
        //LOGO
        let logo = $("nav .my_logo");
        logo.toggleClass("active_logo")


    });

    //SLICK SLIDER
    
    // $(".myServicesSlider").slick();

    $('.servicesSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      });
      
    








});
//J-QUERY END