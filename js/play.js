$(document).ready(function() {
    // ignore small displays
    if (window.matchMedia('(max-device-width: 960px)').matches)
    {
        var hero = document.getElementById('hero');
        hero.setAttribute('preload', 'none');
        return;
    }
    
    // play on scrolling
    var media = $('#hero');
    var tolerancePixel = 10;

    function checkMedia(){
        var scrollTop = $(window).scrollTop() + tolerancePixel;
        var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

        media.each(function() {
            var yTopMedia = $(this).offset().top;
            var yBottomMedia = $(this).height() + yTopMedia;

            if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){
                $(this).get(0).play();
            } else {
                $(this).get(0).pause();
            }
        });
    }
    $(document).on('scroll', checkMedia);
});