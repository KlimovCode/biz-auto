<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));
$link->set_charset("utf8");
$query ="SELECT * FROM chairs";

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    while ($row = mysqli_fetch_row($result)) {
        echo "<tr>
                <td>$row[1]</td>
                <td>$row[2]</td>
                <td>
                    <input type=\"text\" name=\"$row[3]\">
                </td>
            </tr>";
    }
    // очищаем результат
    mysqli_free_result($result);
}

mysqli_close($link);
