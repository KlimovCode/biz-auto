<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));

// get id of brend
$model = explode('/', $_GET['route']);
$model_id = (int)substr($model[4], 2);

$query ="SELECT name FROM submodels WHERE id='$model_id'";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    while ($row = mysqli_fetch_row($result)) {
        echo $row[0];
    }
    // очищаем результат
    mysqli_free_result($result);
}

mysqli_close($link);