<main class="main">
    <div class="container">
        <h2 class="main__title">Административная панель</h2>
        <div class="main__inner">
            <div class="admin__wrap">

                <?php
                    if($_POST['name'] == 'admin' && $_POST['password'] == 'admin') {
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