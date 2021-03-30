<header class="header">
    <div class="container">
        <div class="header__inner">
            <a href="/"><div class="logo"></div></a>
<!--            <div class="search">-->
<!--                <form action="">-->
<!--                    <input type="text" placeholder="Поиск по товарам ..." class="search__input">-->
<!--                    <button type="submit" class="search__btn">ПОИСК</button>-->
<!--                </form>-->
<!--            </div>-->
            <a href="tel:89166896787" class="header__phone__link"><div class="phone">
                <div class="phone__icon"><ion-icon name="call-outline"></ion-icon></div>
                <div class="phone__text">
                    <div class="phone__title">Телефон:</div>
                    <div class="phone__number">8 (916) 689-67-87</div>
                </div>
            </div></a>
            <div class="callback">
                <a href="#" class="callback__btn">Обратный звонок</a>
            </div>
            <div class="cart">
                <a href="/app/cart" class="cart__link">
                    <div class="cart__icon">
                        <span class="cart__count">0</span>
                        <ion-icon name="cart-outline"></ion-icon>
                    </div>
                    <div class="cart__text">
                        <div class="cart__title">Корзина</div>
                        <div class="cart__summ">оформить</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="menu">
        <div class="container">
            <div class="menu__inner">
                <div class="menu__catalog">
                    <a href="" class="menu__catalog__link">
                        <ion-icon name="menu-outline" class="menu__icon"></ion-icon>
                        <span>Каталог товаров</span>
                    </a>
                    <div class="menu__dropdown">
                        <div class="menu__chehli__wrap">
<!--                             menu__dropdown--active-->
                            <a href="/app/auto" class="menu__chehli" data-menu="submenu">Авточехлы</a>
                            <a href="/app/auto/rugs" class="menu__chehli" data-menu="submenurug">Коврики</a>
                            <a href="/app/auto/capes" class="menu__chehli" data-menu="submenucape">Накидки</a>
                            <div class="menu__chehli__links menu__chehli__links--submenu">
                                <?php include "./app/db/getmenu.php"; ?>
                            </div>
                            <div class="menu__chehli__links menu__chehli__links--submenurug">
                                <?php include "./app/db/getmenurug.php"; ?>
                            </div>
                        </div>
<!--                        <a href="#">Коврики</a>-->
<!--                        <a href="#">Накидки</a>-->
<!--                        <a href="#">Аксесуары</a>-->
                        <div class="menu__items__dropdown">
                            <a href="/app/index">Главная</a>
                            <a href="/app/mounting">Установка</a>
                            <a href="/app/about">О нас</a>
                            <a href="/app/contacts">Контакты</a>
                        </div>
                    </div>
                </div>
                <div class="menu__items">
                    <div class="menu__item"><a href="/app/index">Главная</a></div>
                    <div class="menu__item"><a href="/app/mounting">Установка</a></div>
                    <div class="menu__item"><a href="/app/about">О нас</a></div>
                    <div class="menu__item"><a href="/app/contacts">Контакты</a></div>
                </div>
            </div>
        </div>
    </div>
</header>