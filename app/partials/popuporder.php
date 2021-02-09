<div class="popup__order">
    <div class="popup__content">
        <h2>Оставьте свой номер и мы вам перезвоним</h2>
        <form action="/app/order.php" method="POST">
            <input type="text" name="name" placeholder="Ваше имя" class="popup__callback__name"> <br>
            <input type="text" name="phone" placeholder="Ваш телефон" class="popup__callback__phone"> <br>
            <input type="text" name="addres" placeholder="Ваш адрес" class="popup__callback__phone">
            <textarea name="msg" name="msg" id="ordermsg" cols="30" rows="10" hidden></textarea>
            <div class="popup__order__btn">
                <button class="popup__order__buy" type="submit">
                    Оформить
                </button>
            </div>
        </form>
    </div>
</div>