let currentRug = 0

function getCurrentRug() {
    return $(".rug__bigimg").attr('class').split(/\s+/)[1].match(/--(\d+)/)[1]
}

function renderRug(n) {
    $(".rug__bigimg").hide()
    $(".rug__bigimg--"+n).show()
}

function handlerClickSmallImg() {
    $(".rug__small").on('click', (e) => {
        currentRug = $(e.currentTarget).attr('class').match(/--(\d+)/)[1]
        console.log(currentRug)
        renderRug(currentRug)
    })
}

$(document).ready(function() {
    currentRug = getCurrentRug()
    renderRug(currentRug)
    handlerClickSmallImg()
})