/***************************** 
            PAGIBACION 
******************************/
var item = 0;
var itemPaginacion = $("#paginacion li");

/***************************** 
            PAGIBACION 
******************************/


$("#paginacion li").click(function() {

    item = $(this).attr("item") - 1;

    movimientoSlide(item);

})

function avanzar() {

    if (item == 3) {

        item = 0;

    } else {

        item++

    }
    movimientoSlide(item);

}

$("#slide #avanzar").click(function() {

    avanzar();
})

$("#slide #retroceder").click(function() {

    if (item == 0) {

        item = 3;

    } else {

        item--

    }
    movimientoSlide(item);
})


function movimientoSlide(item) {

    $("#slide ul").animate({ "left": item * -100 + "%" }, 500);
    $("#paginacion li").css({ "opacity": 0.5 })
    $(itemPaginacion[item]).css({ "opacity": 1 })

}

setInterval(() => {

    avanzar();

}, 3000);