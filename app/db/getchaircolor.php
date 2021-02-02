<?php

$imgs = '';
$fabrics = '';
$fabrics_input = '<div class="chair__fabrics">
        <label for="alcantara">
            <input type="radio" id="alcantara" name="fabric" checked>
            Алькантара
            <span> 7000 руб.</span>
        </label>
        <label for="ecocloth">
            <input type="radio" id="ecocloth" name="fabric">
            Экокожа
            <span> 7000 руб.</span>
        </label>
        <label for="alcantararomb">
            <input type="radio" id="alcantararomb" name="fabric">
            Алькантара "Ромб"
            <span> 7000 руб.</span>
        </label>
        <label for="ecoclothromb">
            <input type="radio" id="ecoclothromb" name="fabric">
            Экокожа "Ромб"
            <span> 7500 руб.</span>
        </label>
        <label for="velur">
            <input type="radio" id="velur" name="fabric">
            Экокожа+Велюр
            <span> 7500 руб.</span>
        </label>
    </div>';
$count = 1;

$chairs = scandir($_SERVER['DOCUMENT_ROOT'] . "/app/img/chair");
foreach ($chairs as $chair) {
    if ($chair == '.' || $chair == '..') { continue; }
    $models = scandir($_SERVER['DOCUMENT_ROOT'] . "/app/img/chair" . '/' . $chair);
    foreach ($models as $model) {
        if ($model == '.' || $model == '..') { continue; }
        $imgs_path = $_SERVER['DOCUMENT_ROOT'] . "/app/img/chair" . '/' . $chair . '/' . $model;
        $model_imgs = scandir($imgs_path);
        foreach ($model_imgs as $model_img) {
            if ($model_img == '.' || $model_img == '..') { continue; }
            $imgs .= "<div class=\"chair__bigimg chair__bigimg--$count\">
                <img src=\"/app/img/chair/$chair/$model/big.jpg\">
                <span>$model</span>
                </div>";

            $count++;
        }
    }
}
//echo $imgs;
//echo $fabrics_input;
//echo '<div class="chair__color chair__color--alcantara">';
//echo $fabrics;
//echo '</div>';


// $fabrics .= "<div class=\"chair__color__item chair__color__item--$count\">
//                            <img src=\"/app/img/chair/$chair/$model/small.jpg\" alt=\"\">
//                        </div>";