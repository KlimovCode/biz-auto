let currentRug = 0

function getCurrentRug() {
    if($(".rug__bigimg")) return $(".rug__bigimg").attr('class').split(/\s+/)[1].match(/--(\d+)/)[1]
}

function renderRug(n) {
    $(".rug__bigimg").hide()
    $(".rug__bigimg--"+n).show()
}

function handlerClickSmallImg() {
    $(".rug__small").on('click', (e) => {
        currentRug = $(e.currentTarget).attr('class').match(/--(\d+)/)[1]
        console.log(currentRug)
        renderRug(currentRug)
    })
}

function handlerBuyClick() {
    $(".rug__btn__buy").click(() => {
        let title = $(".main__title").text()
        let price = $(".rug__price").text()
        let color = $(".rug__bigimg--" + currentRug + " span").text()

        console.log(title, price, color)

        let cart = {}
        if(localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
            let time = Date.now()
            if(!cart.rugs) cart.rugs = []
            cart.rugs.push({time, title, price, color})
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            let time = Date.now()
            if(!cart.rugs) cart.rugs = []
            cart = {rugs: [{time, title, price, color}]}
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        renderCart()
    })
}

$(document).ready(function() {
    currentRug = getCurrentRug()
    renderRug(currentRug)
    handlerClickSmallImg()
    handlerBuyClick()
})