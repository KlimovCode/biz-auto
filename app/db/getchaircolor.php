<?php

$chairs = scandir("/app/img/chair");
foreach ($chairs as $chair) {
    if ($chair == '.' || $chair == '..') { continue; }
    echo $chair;
}

echo <<< _END
<div class="chair__bigimg chair__bigimg--1">
        <img src="/app/img/chair/Алькантара/Черный/big.jpg" alt="">
        <span>Черный</span>
    </div>
    <div class="chair__fabrics">
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
    </div>
    <div class="chair__color chair__color--alcantara">
        <div class="chair__color__item chair__color__item--1">
            <img src="/app/img/chair/Алькантара/Черный/small.jpg" alt="">
        </div>
    </div>
    <div class="chair__color chair__color--ecocloth">
        <div class="chair__color__item">
            <img src="/app/img/chair/Алькантара/Черный/small.jpg" alt="">
        </div>
    </div>
_END;
