$(document).ready(function() {

    var image, imageCounter =  0, imageCache = [];
    $("slides img").each(function() {
        image = new Image();
        image.src = $(this).attr("src");
        image.title = $(this).attr("alt");
        imageCache[imageCounter] = image;
        imageCounter++;
    });
    
    imageCouinter = 0;
    var nextImage;
    setInterval( function(){
        $("#caption".fadeOut(1000);
        $('#slide").fadeOut(1000
          function() {
            imageCounter = (imageCounter + 1) % imageCache.length;
            nextImage = imageCache[imageCounter];
            $("#slide").attr("src", nextImage.src).fadeIn(1000);
            $("#caption").text(nextImage.title).fadeIn(1000);
        }
    );
    },
    3000);
});