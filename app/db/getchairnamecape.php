<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));
$link->set_charset("utf8");
// get id of brend
$brend = explode('/', $_GET['route']);
preg_match('/(\d)$/', $brend[3], $brend_id);
$brend_id = $brend_id[0];

$query ="SELECT title FROM capemodels WHERE id='$brend_id'";
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    while ($row = mysqli_fetch_row($result)) {
        echo $row[0];
    }
    // очищаем результат
    mysqli_free_result($result);
}

mysqli_close($link);