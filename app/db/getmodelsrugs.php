<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));
$link->set_charset("utf8");
// get id of brend
$brend = explode('/', $_GET['route']);
$brend = $brend[2];
$brend_id = (int)substr($brend, 4);

$query ="SELECT * FROM rugsmodels WHERE brend_id='$brend_id'";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    while ($row = mysqli_fetch_row($result)) {
        echo '<div class="common-card">' . "<a href=\"/app/auto/rugs$brend_id/m$row[0]\"  class=\"common-card__link\">";
        echo "<img src=\"/app/img/rugs/$row[3]\" alt=\"\" class=\"common-card__img common-card__img--rugsmodel\">
               <p class=\"common-card__title\">$row[2]</p>";
        echo '</a></div>';
    }
    // очищаем результат
    mysqli_free_result($result);
}

mysqli_close($link);