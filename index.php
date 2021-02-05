<?php

require_once "./app/partials/top.php";
require_once "./app/partials/header.php";
require_once "./app/partials/popup.php";
if(preg_match("/app\/auto\/a\d{1,2}\/m\d{1,3}\/sm\d{1,2}/", $_GET['route'])) {
    require_once "./app/content/chair.php";
} elseif(preg_match("/app\/auto\/a\d{1,2}\/m\d{1,3}/", $_GET['route'])) {
    require_once "./app/content/submodels.php";
} elseif(preg_match("/app\/auto\/a(\d{1,2}|50)$/", $_GET['route'])) {
    require_once "./app/content/models.php";
} elseif(preg_match("/app\/cart/", $_GET['route'])) {
    require_once "./app/content/cart.php";
} else {
    switch ($_GET['route']) {
        case 'app/auto':
            require_once "./app/content/auto.php";
            break;
        case 'app/mounting':
            require_once "./app/content/mounting.php";
            break;
        case 'app/about':
            require_once "./app/content/about.php";
            break;
        case 'app/contacts':
            require_once "./app/content/contacts.php";
            break;
        default:
            require_once "./app/partials/intro.php";
            require_once "./app/partials/overview.php";
            require_once "./app/partials/benefits.php";
            require_once "./app/partials/labels.php";
            break;
    }
}



require_once "./app/partials/footer.php";
require_once "./app/partials/bottom.php";