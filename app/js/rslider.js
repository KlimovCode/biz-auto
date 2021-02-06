$(document).ready(function() {
    var slideNow = 1;
    var slideCount = $('.rslides').children().length;
    var slideInterval = 5000;
    var translateWidth = 0;

    function nextSlide() {
        if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
            $('.rslides').css({
                'transform': 'translate(0, 0)',
                'transition' : 'all 3s linear'
            });
            slideNow = 1;
        } else {
            translateWidth = -$('.rslides li').width() * (slideNow);
            $('.rslides').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                'transition' : 'all 3000ms linear',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
        }
    }
    setInterval(nextSlide, slideInterval);
})
