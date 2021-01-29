<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));

$query ="SELECT * FROM brends";

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    while ($row = mysqli_fetch_row($result)) {
//        "<a href=\"./auto/a$row[0]\">$row[1]</a>"
        echo '<div class="common-card">' . "<a href=\"./auto/a$row[0]\"  class=\"common-card__link\">";
        echo "<img src=\"img/$row[2]\" alt=\"\" class=\"common-card__img\">
               <p class=\"common-card__title\">$row[1]</p>";
        echo '</a></div>';
    }
    // очищаем результат
    mysqli_free_result($result);
}

mysqli_close($link);