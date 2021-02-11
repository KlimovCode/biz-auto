<main class="main">
    <div class="container">
        <h2 class="main__title">Административная панель</h2>
        <div class="main__inner">
            <div class="admin__wrap">

                <?php
                    function checkEntery() {
                        foreach ($_POST as $name) {
                            if($_POST['name'] == 'admin' && $_POST['password'] == 'admin') return true;
                        }
                        return false;
                    }

                    function checkPriceFields() {
                        foreach ($_POST as $name => $value) {
                            if($value != '') return true;
                        }
                        return false;
                    }
                    function updatePrice() {
                        require_once "./app/db/setPrice.php";
                    }

                    if(checkPriceFields()) {
                        updatePrice();
                        echo '<h2>Ценны изменены</h2>';
                        var_dump($_POST);
                        require_once './app/content/admin/panel.php';
                    } elseif(checkEntery()) {
                        echo '<h2>Вход выполнен</h2>';
                        require_once './app/content/admin/panel.php';
                    } else {
                        echo '<h2>Пожалуйста введите логин и пароль</h2>';
                        require_once './app/content/admin/login.php';
                    }
                ?>

            </div>
        </div>
    </div>
</main>