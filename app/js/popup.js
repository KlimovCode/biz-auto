$(document).ready(function() {
    PopUpHide()
    $(".callback__btn").on('click', function (e) {
        e.preventDefault()
        PopUpShow()
    })
    $(".popup__callback__btn__buy").on('click', function (e) {
        e.preventDefault()
        PopUpHide()
    })
    $(document).click(function(e) {
        if (!$(e.target).is(".callback__btn")) {
            if ($('.callback__btn').is(':visible')) {
                PopUpHide()
            }
        }
    });
})
function PopUpShow(){
    $(".popup__callback").show();
}
function PopUpHide(){
    $(".popup__callback").hide();
}