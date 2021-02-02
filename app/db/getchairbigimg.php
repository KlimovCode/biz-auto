<?php

$bigimgs = '';
$count = 1;

$fabrics = scandir($_SERVER['DOCUMENT_ROOT'] . "/app/img/chair/");
foreach ($fabrics as $fabric) {
    if ($fabric == '.' || $fabric == '..') { continue; }
    $colors = scandir($_SERVER['DOCUMENT_ROOT'] . "/app/img/chair/" . $fabric);
    foreach ($colors as $color) {
        if ($color == '.' || $color == '..') { continue; }
        $imgs = scandir($_SERVER['DOCUMENT_ROOT'] . "/app/img/chair/" . $fabric . '/' . $color);
        $temp = "/app/img/chair/" . $fabric . '/' . $color . '/' . $imgs[2];
        $bigimgs .= "<div class=\"chair__bigimg chair__bigimg--$count\">
                        <img src=\"$temp\">
                        <span>$color</span>
                    </div>";
        $count++;
    }
}
echo $bigimgs;


