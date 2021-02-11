<?php

require './app/db/connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));
$link->set_charset("utf8");

foreach ($_POST as $name => $value) {
    if($value != '') {
        $sql = "UPDATE chairs SET price='$value' WHERE engname='$name'";
        if (mysqli_query($link, $sql)) {
            echo "$name: $value" . '<br>';
        } else {
            echo "Error updating record: " . mysqli_error($link);
        }
    }
}

mysqli_close($link);