<?php

include "./partials/top.php";
include "./partials/header.php";
if(preg_match("/app\/auto\/a(\d{1,2}|50)$/", $_GET['route'])) {
    $brend = explode('/', $_GET['route']);
    $brend = $brend[2];
    
} else {
    switch ($_GET['route']) {
        case 'app/auto':
            include "./content/auto.php";
            break;
        case 'app/mounting':
            include "./content/mounting.php";
            break;
        case 'app/about':
            include "./content/about.php";
            break;
        case 'app/contacts':
            include "./content/contacts.php";
            break;
        default:
            include "./partials/intro.php";
            include "./partials/overview.php";
            include "./partials/benefits.php";
            include "./partials/labels.php";
            break;
    }
}



include "./partials/footer.php";
include "./partials/bottom.php";