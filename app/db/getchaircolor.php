<?php

$count = 49;

$chairs = scandir($_SERVER['DOCUMENT_ROOT'] . "/app/img/chair/Экокожа Ромб");
foreach ($chairs as $chair) {
    if ($chair == '.' || $chair == '..') { continue; }
    $fabrics .= "<div class=\"chair__color__item chair__color__item--$count\">
                            <img src=\"/app/img/chair/Экокожа Ромб/$chair/small.jpg\" alt=\"\">
                        </div>";
    $count++;
}

echo '<div class="chair__color chair__color--ecoclothromb">';
echo $fabrics;
echo '</div>';


