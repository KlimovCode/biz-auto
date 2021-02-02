<main class="main">
    <div class="container">
        <h2 class="main__title"><?php require_once "./db/getchairname.php"?></h2>
        <div class="main__inner">
            <div class="chair__wrap">
                <div class="chair__inner">
                    <?php
                        require_once "chairbigimg.php";
                        require_once "chairfabrics.php";
                        require_once "chaircolor.php";
                    ?>
                </div>
                <div class="chair__btn">
                    <button class="chair__btn__buy">
                        Добавить в корзину
                    </button>
                </div>
            </div>
        </div>
    </div>
</main>