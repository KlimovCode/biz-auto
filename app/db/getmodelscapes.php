<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));
$link->set_charset("utf8");
// get id of brend
$brend = explode('/', $_GET['route']);
preg_match('/(\d)$/', $brend[2], $brend_id);
$brend_id = $brend_id[0];

$query ="SELECT * FROM capemodels WHERE cape_id='$brend_id'";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    while ($row = mysqli_fetch_row($result)) {
        echo '<div class="common-card">' . "<a href=\"/app/auto/capes$brend_id/m$row[0]\"  class=\"common-card__link\">";
        echo "<img src=\"/app/img/$row[3]\" alt=\"\" class=\"common-card__img common-card__img--rugsmodel\">
               <p class=\"common-card__title\">$row[2]</p>";
        echo '</a></div>';
    }
    // очищаем результат
    mysqli_free_result($result);
}

mysqli_close($link);