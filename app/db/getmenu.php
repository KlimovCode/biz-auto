<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));

$query ="SELECT * FROM brends";

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    while ($row = mysqli_fetch_row($result)) {
        echo "<a href=\"./auto/a$row[0]\">$row[1]</a>";
    }
    // очищаем результат
    mysqli_free_result($result);
}

mysqli_close($link);