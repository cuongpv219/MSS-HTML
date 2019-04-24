$(document).ready(function() {
    $('.ui.dropdown').dropdown();
    
    $('#front-mobile-bars i').click(function() {
        $('.front-menu-nav').slideToggle('slow');
    })
})