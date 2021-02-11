<div class="tab-wrapper">

    <ul class="tab-menu">
        <li class="active">цены на ткани</li>
<!--        <li>цены на установку и пошив</li>-->
    </ul>

    <div class="tab-content">
        <div>
            <form action="/app/admin" method="POST">
                <table border="1">
                    <tr>
                        <th>ткань</th>
                        <th>текущая цена</th>
                        <th>установить цену</th>
                    </tr>
                    <?php require_once "./app/db/getpanelfabrics.php" ?>
                </table>
                <button type="submit">Сохранить</button>
            </form>
        </div>
    </div>
<!--    <div class="tab-content">-->
<!--        <div>-->
<!--            <form action="/app/admin" method="POST">-->
<!--                <table border="1">-->
<!--                    <tr>-->
<!--                        <th>ткань</th>-->
<!--                        <th>текущая цена</th>-->
<!--                        <th>установить цену</th>-->
<!--                    </tr>-->
<!--                    --><?php //require_once "./app/db/getpanelfabrics.php" ?>
<!--                </table>-->
<!--                <button type="submit">Сохранить</button>-->
<!--            </form>-->
<!--        </div>-->
<!--    </div>-->

</div>



