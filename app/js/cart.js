$(document).ready(function() {
    function showCart() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let result = ""
        let goodsLength = cart.goods ? cart.goods.length : 0
        let rugsLength = cart.rugs ? cart.rugs.length : 0
        if((goodsLength + rugsLength) >= 1) {
            let totalCount = 0
            result = "<tr><th>№</th><th>Модель</th><th>Цена</th></tr>"
            if(cart.goods && Array.isArray(cart.goods)) {
                let cart = JSON.parse(localStorage.getItem('cart'))
                let goods = cart.goods
                for (let i = 0; i < goods.length; i++) {
                    result += `<tr>
                        <td>${++totalCount}</td>
                        <td>
                            <table class="cart__table__inside">
                                <tr>
                                    <td colspan="2" class="cart__table__inside__name">
                                        ${goods[i].titleAuto}
                                        <button class="delbtn" id="del-${goods[i].time}">Убрать</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        ткань: ${goods[i].fabricRus}
                                    </td>
                                    <td>
                                        цвет: ${goods[i].fabricColor}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label for="setchechol-${goods[i].time}" class="cart__table__inside__input">
                                            установка 1500 руб.
                                            <input type="checkbox"
                                                name="setchechol"
                                                id="setchechol-${goods[i].time}">
                                        </label>
                                    </td>
                                    <td>
                                        <label for="sewchechol-${goods[i].time}" class="cart__table__inside__input">
                                            подшивка от 1000 руб.
                                            <input type="checkbox" name="sewchechol" id="sewchechol-${goods[i].time}">
                                        </label>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td id="price-${goods[i].time}">${goods[i].actualPrice}</td>
                    </tr>`
                }
            }
            if(cart.rugs && Array.isArray(cart.rugs)) {
                let rugs = JSON.parse(localStorage.getItem('cart')).rugs
                for (let i = 0; i < rugs.length; i++) {
                    result += `<tr>
                        <td>${++totalCount}</td>
                        <td>
                            <table>
                            <tr><td colspan="2" class="cart__table__inside__name">
                                ${rugs[i].title}
                                <button class="delbtn" id="del-${rugs[i].time}">Убрать</button>
                            </td></tr>
                            <tr><td colspan="2">цвет: ${rugs[i].color}</td></tr>
                            </table>
                        </td>
                        <td>${rugs[i].price}</td>
                        </tr>`
                }
            }
        } else {
            result = "Корзина пока пуста"
        }

        $(".cart__table").html(result)
    }

    function checkCheckedInput() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let goods = cart.goods
        for (const good of goods) {
            $("#sewchechol-"+good.time).prop('checked', good.sewchechol)
            $("#setchechol-"+good.time).prop('checked', good.setchechol)
        }
    }

    function actualPrice() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let goods = cart.goods
        let newGoods = []
        for (const good of goods) {
            let price = +good.price.split(" ")[0]
            if(good.sewchechol) price = price + 1000
            if(good.setchechol) price = price + 1500
            good.actualPrice = price
            newGoods.push(good)
        }
        cart.goods = newGoods
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    function toggleInput(e) {
        let inputName = e.target.id.split("-")[0]
        let inputId = e.target.id.split("-")[1]
        if(inputName && inputId) {
            console.log(inputName,inputId)
            let cart = JSON.parse(localStorage.getItem('cart'))
            let goods = cart.goods
            let newGoods = []
            for (const good of goods) {
                if(good.time == inputId) {
                    good[inputName] = !good[inputName]
                    newGoods.push(good)
                } else {
                    newGoods.push(good)
                }
            }
            cart.goods = newGoods
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }

    showCart()
    checkCheckedInput()
    actualPrice()
    handlerToggle()
    handlerDelete()

    function handlerToggle() {
        $(".cart__table__inside__input").click(function (e) {
            toggleInput(e)
            actualPrice()
            changePrice()
        })
    }

    function changePrice() {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let goods = cart.goods
        for (const good of goods) {
            $("#price-"+good.time).text(good.actualPrice)
        }
    }

    function handlerDelete() {
        $(".delbtn").click(function (e) {
            let deleteItemId = e.target.id.split("-")[1]
            let cart = JSON.parse(localStorage.getItem('cart'))

            if(JSON.parse(localStorage.getItem('cart')).goods) {
                let goods = JSON.parse(localStorage.getItem('cart')).goods
                let newGoods = []
                for (const good of goods) {
                    if(good.time != deleteItemId) newGoods.push(good)
                }
                cart.goods = newGoods
            }

            if(JSON.parse(localStorage.getItem('cart')).rugs) {
                let rugs = JSON.parse(localStorage.getItem('cart')).rugs
                let newRugs = []
                for (const rug of rugs) {
                    if(rug.time != deleteItemId) newRugs.push(rug)
                }
                cart.rugs = newRugs
            }

            localStorage.setItem('cart', JSON.stringify(cart))
            showCart()
            renderCart()
            checkCheckedInput()
            handlerToggle()
            handlerDelete()
        })
    }

})