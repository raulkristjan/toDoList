$("ul").on("click", "li", function () {

    $(this).toggleClass("completed");

});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();

});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<LI><span><i class= 'fas fa-trash'></i></span> " + toDoText + "</LI>");
    }
});

$("#pluss").click(function () {
    $("input[type='text']").fadeToggle();
});