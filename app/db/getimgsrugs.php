<?php

require_once 'connection.php'; // get variables

$link = mysqli_connect($host, $username, $password, $dbname)
or die("Ошибка " . mysqli_error($link));
$link->set_charset("utf8");

// get id of model
$model = explode('/', $_GET['route']);
$model_id = (int)substr($model[3], 1);

$query = "SELECT * FROM rugsitems WHERE model_id='$model_id'";

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));

if($result) {
    $bigimg = '<div class="rug__bigimg__wrap">';
    $smallimg = '<div class="rug__smallimg__wrap">';
    while ($row = mysqli_fetch_row($result)) {
        $bigimg .= '<div class="rug__bigimg rug__bigimg--'. $row[0] . '">
            <img src="/app/img/rugs/img/'. $row[4] . '" alt=\"\">
            <span>'. $row[2] . '</span>
            </div>';
        $smallimg .= '<div class="rug__small rug__small--'. $row[0] . '">
            <img src="/app/img/rugs/'. $row[3] . '" alt=\"\">
            </div>';
    }
    echo '<div class="rugs__wrap">';
    echo $bigimg . '</div>';
    echo $smallimg . '</div>';
    echo '</div>';

    // очищаем результат
    mysqli_free_result($result);
}

mysqli_close($link);
