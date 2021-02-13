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
})