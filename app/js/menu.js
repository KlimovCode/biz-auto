$(document).ready(function() {
    $(".menu__catalog a").on("click", function(e){
        e.preventDefault()
        $(".menu__dropdown").toggle("slow");
    })

    $(".menu__chehli").on("click", function(e){
        e.preventDefault()
        $(".menu__dropdown").toggle("slow");
    })
})