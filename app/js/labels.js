$(document).ready(function() {
    var labelNow = 1;
    var labelCount = $('.labels__inner').children().length;
    var labelInterval = 4000;
    var labelTranslateWidth = 0;

    function nextLabel() {
        if (labelNow == labelCount || labelNow <= 0 || labelNow > (labelCount - 6)) {
            $('.labels__inner').css({
                'transform': 'translate(0, 0)',
                'transition' : 'all 1s linear'
            });
            labelNow = 1;
        } else {
            labelTranslateWidth = -$('.labels__inner .label__item').width() * (labelNow);
            $('.labels__inner').css({
                'transform': 'translate(' + labelTranslateWidth + 'px, 0)',
                'transition' : 'all 1s linear',
                '-webkit-transform': 'translate(' + labelTranslateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + labelTranslateWidth + 'px, 0)',
            });
            labelNow++;
        }
    }
    setInterval(nextLabel, labelInterval);

    $(".labels__arrow__left button").click(function () {
        labelNow -= 2
        nextLabel()
        setTimeout(()=>{}, 1000)
    })
    $(".labels__arrow__right button").click(function () {
        nextLabel()
    })
})
