$(document).ready(function() {
    function showCart() {
        let result = ""
        if(localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'))
            let goods = cart.goods
            result = "<tr><th>№</th><th>Модель</th><th>Цена</th></tr>"
            for (let i = 0; i < goods.length; i++) {
                result += `<tr>
                        <td>${i+1}</td>
                        <td>
                            <table class="cart__table__inside">
                                <tr>
                                    <td colspan="2" class="cart__table__inside__name">${goods[i].titleAuto}</td>
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
                                            установка
                                            <input type="checkbox" name="setchechol" id="setchechol-${goods[i].time}">
                                        </label>
                                    </td>
                                    <td>
                                        <label for="sewchechol-${goods[i].time}" class="cart__table__inside__input">
                                            подшивка
                                            <input type="checkbox" name="sewchechol" id="sewchechol-${goods[i].time}">
                                        </label>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>${goods[i].price}</td>
                    </tr>`
            }
        } else {
            result = "Корзина пока пуста"
        }
        $(".cart__table").html(result)
    }
    showCart()
})