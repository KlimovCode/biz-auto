<?php

include "./partials/top.php";
include "./partials/header.php";

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

include "./partials/footer.php";
include "./partials/bottom.php";