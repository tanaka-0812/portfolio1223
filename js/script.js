$(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenu').addClass('active');
        } else {
            $('.globalMenu').removeClass('active');
        }
    });

    
});