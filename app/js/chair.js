$(document).ready(function() {
    let img = 1
    let fabric = 'alcantara'

    $(".chair__bigimg--"+img).show()
    $(".chair__color--"+fabric).css({display: 'flex'})

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
    })

    $(".chair__btn__buy").on('click', function (e) {
        let title = $(".main__title").text();
        let price = $(".chair__fabrics label[for="+fabric+"] span").text()
        let data = {
            imgNumber: img,
            titleAuto: title,
            fabricName: fabric,
            price
        }
        let cart = {}
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
            let time = Date.now()
            cart.goods.push({time, ...data})
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            let time = Date.now()
            cart = {goods: [{time, ...data}]}
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        console.log(JSON.parse(localStorage.getItem('cart')))
    })
})