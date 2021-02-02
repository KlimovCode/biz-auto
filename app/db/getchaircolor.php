<?php

$imgs = '';
$fabrics = '';
$fabrics_input = '';
$count = 13;

$chairs = scandir($_SERVER['DOCUMENT_ROOT'] . "/app/img/chair/Алькантара");
foreach ($chairs as $chair) {
    if ($chair == '.' || $chair == '..') { continue; }
    $fabrics .= "<div class=\"chair__color__item chair__color__item--$count\">
                            <img src=\"/app/img/chair/Алькантара/$chair/small.jpg\" alt=\"\">
                        </div>";
    $count++;
}
//echo $imgs;
//echo $fabrics_input;
echo '<div class="chair__color chair__color--alcantara">';
echo $fabrics;
echo '</div>';


