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
    $("#ordermsg").val(createLayout())
    $(".popup__order").show();
}
function orderHide(){
    $(".popup__order").hide();
}

function createLayout() {
    let result = ''
    let cart = JSON.parse(localStorage.getItem('cart'))
    let goods = cart.goods
    if(goods.length) {
        result = '<table border="1">'
        result += '<tr><th>№</th><th>Модель</th><th>Цена</th></tr>'
        for (let i = 0; i < goods.length; i++) {
            result += '<tr>'
            result += `<td>${i+1}</td>`
            result += `<td><table border="1"><tr><td colspan="2"><b>${goods[i].titleAuto}</b></td></tr>`
            result += `<tr><td>ткань: ${goods[i].fabricRus}</td><td>цвет: ${goods[i].fabricColor}</td></tr>`
            result += `<tr><td>установка 1500 руб. - ${goods[i].setchechol}</td>`
            result += `<td>подшивка 1000 руб. - ${goods[i].sewchechol}</td></tr></table></td>`
            result += `<td>итого - ${goods[i].actualPrice}</td></tr>`
            result += '</tr>'
        }
        result += '</table>'
    } else {
        result = '<p>Корзина пользователя пуста.</p>'
    }
    return result
}