$(document).ready(function() {
    PopUpHide()
    orderHide()

    $(".callback__btn").on('click', function (e) {
        e.preventDefault()
        e.stopPropagation();
        PopUpShow()
    })
    $(".popup__callback__btn__buy").on('click', function (e) {
        e.preventDefault()
        PopUpHide()
    })
    $(".cart__btn__buy").on('click', function (e) {
        orderShow()
    })
    $(document).click(function(e) {
        if ($(e.target).is(".popup__callback")) {
            PopUpHide()
        }
        if ($(e.target).is(".popup__order")) {
            orderHide()
        }
    });
})
function PopUpShow(){
    $(".popup__callback").show();
}
function PopUpHide(){
    $(".popup__callback").hide();
}

function orderShow(){
    $(".popup__order").show();
}
function orderHide(){
    $(".popup__order").hide();
}