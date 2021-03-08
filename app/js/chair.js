function renderCart() {
    if(localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'))
        let goodsLength = cart.goods ? cart.goods.length : 0
        let rugsLength = cart.rugs ? cart.rugs.length : 0
        $(".cart__count").text(goodsLength + rugsLength)
    } else {
        $(".cart__count").text(0)
    }
}
renderCart()

function renderChair(img = 1, fabric = 'alcantara') {
    if(img == 0) img = 1
    if(currentBigimg) img = currentBigimg

    $(".chair__bigimg").css({display: 'none'})
    $(".chair__color").css({display: 'none'})

    $(".chair__bigimg--"+img).show()
    $(".chair__color--"+fabric).css({display: 'flex'})

    console.log(fabric)
    setTimeout(() => {
        $("#"+fabric).attr('checked','checked')
    }, 300)
    // $("#"+fabric).attr('checked','checked')
}

function getData(img = 1, fabric = 'alcantara') {
    if(chairgallery.length != 0) fabric = chairgallery[currentBigimg-1].fabric
    if(currentBigimg) img = currentBigimg

    let temp = {
        title : $(".main__title").text(),
        price : $(".chair__fabrics label[for="+fabric+"] .fabric__price").text(),
        fabricRus : $(".chair__fabrics label[for="+fabric+"] .fabric__name").text(),
        fabricColor : $(".chair__bigimg--"+img+" span").text()
    }
    return temp
}

function chairHandlers(img = 1, fabric = 'alcantara') {
    if(chairgallery.length != 0) fabric = chairgallery[currentBigimg-1].fabric
    if(currentBigimg) img = currentBigimg

    $(".chair__fabrics label").on('click', function (e) {
        let temp = e.target.id
        if(temp) fabric = temp
        $(".chair__color").css({display: 'none'})
        $(".chair__color--"+fabric).css({display: 'flex'})
    })

    $(".chair__color__item").on('click', function (e) {
        let temp = e.currentTarget.classList // [..]
        let temp2 = temp[1].substr(-2) // [-9 - 99]
        img = temp2 < 0 ? temp[1].substr(-1) : temp2
        $(".chair__bigimg").css({display: 'none'})
        $(".chair__bigimg--"+img).show()
        currentBigimg = img
    })

    $(".chair__btn__buy").on('click', function (e) {
        let {title, price, fabricRus, fabricColor} = getData()

        let data = {
            imgNumber: img,
            titleAuto: title,
            fabricName: fabric,
            setchechol: false,
            sewchechol: false,
            fabricRus,
            fabricColor,
            price,
            actualPrice: price
        }

        let cart = {}
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
            let time = Date.now()
            if(!cart.goods) cart.goods = []
            cart.goods.push({time, ...data})
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            let time = Date.now()
            if(!cart.goods) cart.goods = []
            cart = {goods: [{time, ...data}]}
            localStorage.setItem('cart', JSON.stringify(cart))
        }

        renderCart()
    })

}

$(document).ready(function() {
    renderChair()
    chairHandlers()
})