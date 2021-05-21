$(document).ready(function() {
    $(".first-list-element").addClass("active");
    $(".sidebar .ins-ul li").click(function() {
        $(".sidebar .ins-ul li").removeClass("active");
        $(this).addClass("active");
    });
    $(".ull li").click(function() {
        $(".ull li").removeClass("active");
        $(this).addClass("active");
    });

    $(".card").mouseenter(function() {
        $(this).css("margin-top", "10px");
    });
    $(".card").mouseleave(function() {
        $(this).css("margin-top", "7px");
    });
});