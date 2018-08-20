// function viewFun() {
// 	var x = document.getElementById('hide');
//     if (x.style.display === 'none') {
//         x.style.display = 'block';
//     } else {
//         x.style.display = 'none';
//     }
// }

$(document).ready(function(){
    $("button").click(function(){
        $("#hide").toggle();
    });
});



// smooth scroll

$('a[href^="#"]').click(function () {
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1000);

    return false;
});