<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));
$link->set_charset("utf8");
// get id of model
$model = explode('/', $_GET['route']);
preg_match('/(\d)$/', $model[3], $model_id);
$model_id = $model_id[0];

$query ="SELECT price FROM capemodels WHERE id='$model_id'";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    while ($row = mysqli_fetch_row($result)) {
        echo '<div class="rug__price">' . $row[0] . ' руб.</div>';
    }
    // очищаем результат
//    mysqli_free_result($result);
}

//mysqli_close($link);