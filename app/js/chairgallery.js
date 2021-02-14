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
        function gather(num) {
            return {
                bigimg: $(".chair__bigimg--"+num+" img").attr('src'),
                colorname: $(".chair__bigimg--"+num+" span").text(),
                bigimg: $(".chair__color__item--"+num+" img").attr('src'),
            }
        }

        let totalCoutnChairs = $(".chair__bigimg img").length
        const result = []

        for (let i = 0; i < totalCoutnChairs; i++) {
            result.push(gather(i+1))
        }
        console.log(result)
    }
    getDataChairs()




})