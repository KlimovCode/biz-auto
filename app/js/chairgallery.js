$(document).ready(function() {
    function chairgalleryPopup() {
        var popup = document.querySelector(".chairgallery__popup");
        var popupBtnShow = document.querySelectorAll(".chairgallery__btn");
        var close = document.querySelector(".chairgallery__closebtn");

        for (const popupBtnShowElement of popupBtnShow) {
            popupBtnShowElement.addEventListener("click", function(event){
                console.log('hi')
                event.preventDefault();
                popup.classList.remove("chairgallery__popup--hidden");
            });
        }

        popup.addEventListener("click", function(event) {
            e = event || window.event
            if (e.target == this) {
                popup.classList.add("chairgallery__popup--hidden");
            }
        });

        close.addEventListener("click", function(event){
            event.preventDefault();
            popup.classList.add("chairgallery__popup--hidden");
        });
    }
    chairgalleryPopup()

    function getDataChairs() {
        /*
        * What I want to see
        * {
        *   titlecolor: 'Бежевый + бежевый',
        *   bigimg: '/app/img/chair/Алькантара/Бежевый + бежевый/big.jpg',
        *   smallimg: '/app/img/chair/Алькантара/Бежевый + бежевый/small.jpg',
        * }
         */
        const result = []
        let chairbigimgs = $(".chair__bigimg img")
        for (const chairbigimg of chairbigimgs) {
            let chairbigimg_link = $(chairbigimg).attr('src')
            console.log(chairbigimg_link)
        }
    }
    getDataChairs()
})