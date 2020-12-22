$(function(){
    $('.item-parts').hover(
        function(){
            $(this).find('.itemName').fadeIn(300).addClass('itemName-active');
            
        },
        function(){
            $(this).find('.itemName').fadeOut().removeClass('itemName-active');
        }
    );
});

// $(function(){
//     $('.name1').fadeToggle(3000);
//     $('.name2').fadeToggle(3000);
//     $('.name3').fadeToggle(3000);
//     $('.name4').fadeToggle(3000);
//     $('.name5').fadeToggle(3000);
//     $('.name6').fadeToggle(3000);
// });
