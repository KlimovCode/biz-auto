$(document).ready(function() {
    $(".chair__fabrics label").on("click", function(e){
        $(".chair__color").hide()
        let selectedFabric = null
        if(e.target.id) selectedFabric = e.target.id
        if(e.target.id) {
            $(".chair__color--"+selectedFabric).show();
        }

    })
})