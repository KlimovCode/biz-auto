<main class="main">
    <div class="container">
        <h2 class="main__title"><?php require_once "./db/getchairname.php"?></h2>
        <div class="main__inner">
            <div class="chair__wrap">
                <?php
                    require_once "chairbigimg.php";
                    require_once "chairfabrics.php";
//                    require_once "chaircolor.php";
                    require_once "./db/getchaircolor.php";
                ?>
            </div>
        </div>
    </div>
</main>