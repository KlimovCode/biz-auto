$(document).ready(function() {
    PopUpHide()
    $(".callback__btn").on('click', function (e) {
        e.preventDefault()
        e.stopPropagation();
        PopUpShow()
    })
    $(".popup__callback__btn__buy").on('click', function (e) {
        e.preventDefault()
        PopUpHide()
    })
    $(document).click(function(e) {
        if ($(e.target).is(".popup__callback")) {
            PopUpHide()
        }
    });
})
function PopUpShow(){
    $(".popup__callback").show();
}
function PopUpHide(){
    $(".popup__callback").hide();
}