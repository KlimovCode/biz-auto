let currentRug = 0

function getCurrentRug() {
    return $(".rug__bigimg").attr('class').split(/\s+/)[1].match(/--(\d+)/)[1]

}

function renderRug(n) {
    $(".rug__bigimg").hide()
    $(".rug__bigimg--"+n).show()
}

$(document).ready(function() {
    currentRug = getCurrentRug()
    renderRug(currentRug)
})