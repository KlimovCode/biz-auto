$(document).ready(function() {
    $(".menu__catalog__link").on("click", function(e){
        e.preventDefault()
        $(".menu__dropdown").toggle("slow");
    })
    //
    // $(".menu__chehli").on("click", function(e){
    //     e.preventDefault()
    //     $(".menu__dropdown").toggle("slow");
    // })
    // $(".menu__chehli").hover((e) => {
    //     if(e.type == 'mouseenter') {
    //         let currentMenu = $(e.currentTarget).attr('data-menu')
    //         switch (currentMenu) {
    //             case 'submenu': $(".menu__chehli__links--submenu").show(); break;
    //             case 'submenurug': $(".menu__chehli__links--submenu").show(); break;
    //             default: break
    //         }
    //     } else {
    //         $(".menu__chehli__links").hide()
    //     }
    // })

})