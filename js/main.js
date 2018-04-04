function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').css('display','none');
    });
}

// Usage:

preload([
    'images/time.jpg',
    'images/24hours.jpg',
    'images/hipster.jpg',
    'images/large-pg-img.jpg'
]);



$(window).on('load', function() { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(600).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(600).css({'overflow':'visible'});



    let  i = 0;
    setInterval(function() {

        let images= ['time.jpg','24hours.jpg','hipster.jpg','large-pg-img.jpg'];
        (i === images.length-1) ? i = 0 : i++;

        console.log(i);
        var image = $('#image-holder');
        image.fadeOut(2000, function () {
            image.css("background", "url('images/" + images[i] + "')");
            image.css("background-size", "cover");
            image.fadeIn(2000);

        });

    }, 6000);


    $(document).scroll(function() {

        if($(this).scrollTop() >= 70) {
            $('.bg-custom-dark').css('background-color','#1C1C1D');
        } else {
            $('.bg-custom-dark').css('background-color','transparent');

        }

    });




});

