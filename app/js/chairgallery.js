let chairgallery = []
let currentBigimg = 0

$(document).ready(function() {

    function getDataChairs() {
        function gather(num) {
            return {
                bigimg: $(".chair__bigimg--"+num+" img").attr('src'),
                colorname: $(".chair__bigimg--"+num+" span").text(),
                smallimg: $(".chair__color__item--"+num+" img").attr('src'),
                fabric: $(".chair__color__item--"+num).parents()[0].classList[1].match(/--(.*)/)[1]
            }
        }

        let totalCountChairs = $(".chair__bigimg img").length
        const result = []

        for (let i = 0; i < totalCountChairs; i++) {
            result.push(gather(i+1))
        }
        console.log(result)
        chairgallery = result
    }

    function chairgalleryRender(currentBigimg) {
        let smallimages = ''

        function smallimgRender() {
            for (let i = 0; i < chairgallery.length; i++) {
                if(i == currentBigimg-1) {
                    smallimages += `<img src='${chairgallery[i].smallimg}' class='chairgallery__smallimgs__item--active'>`
                } else {
                    smallimages += `<img src='${chairgallery[i].smallimg}'>`
                }
            }

            $(".chairgallery__smallimgs").html(smallimages)

            let imgwidth = 30
            let temp = imgwidth * currentBigimg-16
            console.log(temp)
            $(".chairgallery__smallimgs").css({
                'left': '-'+temp+'px'
            })
        }
        smallimgRender()

        function bigimgRender(num) {
            $(".chairgallery__bigimg").html(`<img src='${chairgallery[num].bigimg}'>`)
        }
        bigimgRender(currentBigimg-1)

        function colornameRender(num) {
            $(".chairgallery__colortitle").html(`<span>${chairgallery[num].colorname}</span>`)
        }
        colornameRender(currentBigimg-1)

    }

    function chairgalleryPopup() {
        var popup = document.querySelector(".chairgallery__popup");
        var popupBtnShow = document.querySelectorAll(".chairgallery__btn");
        var close = document.querySelector(".chairgallery__closebtn");

        for (const popupBtnShowElement of popupBtnShow) {
            popupBtnShowElement.addEventListener("click", function(event){
                event.preventDefault();
                popup.classList.remove("chairgallery__popup--hidden");
                let currentImg = event.target.parentElement.classList[1].substr(-2)
                currentBigimg = Math.abs(currentImg)
                getDataChairs()
                chairgalleryRender(currentBigimg)
            });
        }

        popup.addEventListener("click", function(event) {
            e = event || window.event
            if (e.target == this) {
                popup.classList.add("chairgallery__popup--hidden");
                console.log('popup over close ', chairgallery[currentBigimg-1].fabric)
                renderChair(currentBigimg, chairgallery[currentBigimg-1].fabric)
            }
        });

        close.addEventListener("click", function(event) {
            event.preventDefault();
            popup.classList.add("chairgallery__popup--hidden");
            renderChair(currentBigimg, chairgallery[currentBigimg].fabric)
        });
    }
    chairgalleryPopup()

    function nextBtn() {
        $(".chairgallery__nextbtn").click(function(){
            currentBigimg >= chairgallery.length ? currentBigimg = 1 : currentBigimg++
            chairgalleryRender(currentBigimg)
        })
    }
    nextBtn()
    function prevBtn() {
        $(".chairgallery__prevbtn").click(function(){
            currentBigimg <= 1 ? currentBigimg = chairgallery.length : currentBigimg--
            chairgalleryRender(currentBigimg)
        })
    }
    prevBtn()



})