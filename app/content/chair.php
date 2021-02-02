<main class="main">
    <div class="container">
        <h2 class="main__title"><?php require_once "./db/getchairname.php"?></h2>
        <div class="main__inner">
            <div class="chair__wrap">
                <div class="chair__bigimg">
                    <img src="/app/img/chair/Алькантара/Черный/big.jpg" alt="">
                    <span>Черный</span>
                </div>
                <div class="chair__fabrics">
                    <label for="alcantara">
                        <input type="radio" id="alcantara" name="fabric">
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
                <div class="chair__color">
                    <div class="chair__color__item">
                        <img src="/app/img/chair/Алькантара/Черный/small.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>