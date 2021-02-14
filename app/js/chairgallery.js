$(document).ready(function() {
    let chairgallery = []

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
                smallimg: $(".chair__color__item--"+num+" img").attr('src'),
            }
        }

        let totalCoutnChairs = $(".chair__bigimg img").length
        const result = []

        for (let i = 0; i < totalCoutnChairs; i++) {
            result.push(gather(i+1))
        }
        console.log(result)
        chairgallery = result
    }
    getDataChairs()

    function chairgalleryRender() {
        let smallimages = ''
        let currentBigimg = 1

        function smallimgRender() {
            for (let i = 0; i < chairgallery.length; i++) {
                smallimages += `<img src='${chairgallery[i].smallimg}'>`
            }
            $(".chairgallery__smallimgs").html(smallimages)
        }
        smallimgRender()

        function bigimgRender(num) {
            $(".chairgallery__bigimg").html(`<img src='${chairgallery[num].bigimg}'>`)
        }
        bigimgRender(1)

        function colornameRender(num) {
            $(".chairgallery__colortitle").html(`<span>${chairgallery[num].colorname}</span>`)
        }
        colornameRender(1)

    }
    chairgalleryRender()


})