<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));

// get id of brend
$model = explode('/', $_GET['route']);
$model = $model[3];
$model_id = (int)substr($model, 1);

$query ="SELECT * FROM submodels WHERE id_model='$model_id'";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    while ($row = mysqli_fetch_row($result)) {
        echo '<div class="common-card">' . "<a href=\"./a$brend_id/m$row[0]\"  class=\"common-card__link\">";
        echo "<img src=\"/app/img/$row[2]\" alt=\"\" class=\"common-card__img\">
               <p class=\"common-card__title\">$row[1]</p>";
        echo '</a></div>';
    }
    // очищаем результат
    mysqli_free_result($result);
}

mysqli_close($link);