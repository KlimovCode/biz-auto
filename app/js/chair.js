$(document).ready(function() {
    let img = 1
    let fabric = 'alcantara'

    $(".chair__bigimg--"+img).show()
    $(".chair__color--"+fabric).css({display: 'flex'})

    $(".chair__fabrics label").on('click', function (e) {
        let temp = e.target.id
        if(temp) fabric = temp
        $(".chair__color").css({display: 'none'})
        $(".chair__color--"+fabric).css({display: 'flex'})
    })

    $(".chair__color__item").on('click', function (e) {
        let temp = e.currentTarget.classList // [..]
        let temp2 = temp[1].substr(-2) // [-9 - 99]
        let img = temp2 < 0 ? temp[1].substr(-1) : temp2
        $(".chair__bigimg").css({display: 'none'})
        $(".chair__bigimg--"+img).show()
    })
})