$(document).ready(function () {

    $('.Qr_button_open').click(function(){
        $('.QR_code_body').css("display", "flex").hide().fadeIn(300);
    });

    $('.back').click(function(){
        $('.QR_code_body').fadeOut(300);
    });

});