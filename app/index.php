<?php

require_once "./partials/top.php";
require_once "./partials/header.php";
if(preg_match("/app\/auto\/a\d{1,2}\/m\d{1,3}\/sm\d{1,2}/", $_GET['route'])) {
    require_once "./content/chair.php";
} elseif(preg_match("/app\/auto\/a\d{1,2}\/m\d{1,3}/", $_GET['route'])) {
    require_once "./content/submodels.php";
} elseif(preg_match("/app\/auto\/a(\d{1,2}|50)$/", $_GET['route'])) {
    require_once "./content/models.php";
} else {
    switch ($_GET['route']) {
        case 'app/auto':
            require_once "./content/auto.php";
            break;
        case 'app/mounting':
            require_once "./content/mounting.php";
            break;
        case 'app/about':
            require_once "./content/about.php";
            break;
        case 'app/contacts':
            require_once "./content/contacts.php";
            break;
        default:
            require_once "./partials/intro.php";
            require_once "./partials/overview.php";
            require_once "./partials/benefits.php";
            require_once "./partials/labels.php";
            break;
    }
}



require_once "./partials/footer.php";
require_once "./partials/bottom.php";