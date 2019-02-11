$(document).ready(function() {
    $(".command").each(function(index) {
        $(this).css("animation-delay", -index*2 + "s");
    });
});