$(document).ready(function() {
    let result = ""
    if(localStorage.getItem('cart')) {
        let cart = JSON.parse(localStorage.getItem('cart'))
        let goods = cart.goods
        result = "<tr><th>№</th><th>Модель</th><th>Цена</th></tr>"
        for (let i = 0; i < goods.length; i++) {
            result += `<tr>
                        <td>${i+1}</td>
                        <td>${goods[i].titleAuto}</td>
                        <td>${goods[i].price}</td>
                    </tr>`
        }
    } else {
        result = "Корзина пока пуста"
    }
    $(".cart__table").html(result)
})