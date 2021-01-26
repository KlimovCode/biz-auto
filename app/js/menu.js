$(document).ready(function() {
    $(".menu__catalog__link").on("click", function(e){
        e.preventDefault()
        $(".menu__dropdown").toggle("slow");
    })

    $(".menu__chehli").on("click", function(e){
        e.preventDefault()
        $(".menu__dropdown").toggle("slow");
    })
})