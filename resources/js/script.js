// MixitUp

var mixer = mixitup('.gird-portfolio-container');

// Scrollify

 $(function() {
     $.scrollify({
       section : ".scrollify",
         setHeights: false,
         updateHash: false,
     });
 });

//Hamburger Menu

function openMenu(){
    document.getElementById("navbar").style.height= "100%";
}

function closeMenu(){
    document.getElementById("navbar").style.height= "0%";
}

// Smooth Scroll

$(function(){
    $('.menu-items a, .scroll-down a').on('click', function(){
       $('html,body').animate({
           scrollTop: $($.attr(this, 'href')).offset().top
       }, 1000);
        return false;
    });
});