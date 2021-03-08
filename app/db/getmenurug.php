<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));
$link->set_charset("utf8");
$query ="SELECT * FROM rugsbrends";

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    while ($row = mysqli_fetch_row($result)) {
        $prepare = explode(' ', $row[1])[1];
        echo "<a href=\"/app/auto/rugs$row[0]\">$prepare</a>";
    }
    // очищаем результат
    mysqli_free_result($result);
}

mysqli_close($link);