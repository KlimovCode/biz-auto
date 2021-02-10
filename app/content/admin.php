<main class="main">
    <div class="container">
        <h2 class="main__title">Административная панель</h2>
        <div class="main__inner">
            <div class="admin__wrap">

                <?php
                    function checkPriceFields() {
                        foreach ($_POST as $name) {
                            if($name != '') return true;
                        }
                    }

                    if(checkPriceFields()) {
                        echo '<h2>change price</h2>';
                        var_dump($_POST);
                        require_once './app/content/admin/panel.php';
                    } elseif($_POST['name'] == 'admin' && $_POST['password'] == 'admin') {
                        echo '<h2>Вход выполнен</h2>';
                        updatePrice();
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