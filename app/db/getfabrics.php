<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));
$link->set_charset("utf8");
$query ="SELECT * FROM chairs";

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    while ($row = mysqli_fetch_row($result)) {
        if($row[3] == 'alcantara') {
            echo "<label for=\"$row[3]\">
                <input type=\"radio\" id=\"$row[3]\" name=\"fabrics\" checked>
                <span class=\"fabric__name\">$row[1]</span>
                <span class=\"fabric__price\">$row[2] руб.</span>
            </label>";
            continue;
        }
        echo "<label for=\"$row[3]\">
                <input type=\"radio\" id=\"$row[3]\" name=\"fabrics\">
                <span class=\"fabric__name\">$row[1]</span>
                <span class=\"fabric__price\">$row[2] руб.</span>
            </label>";
    }
    // очищаем результат
    mysqli_free_result($result);
}

mysqli_close($link);
