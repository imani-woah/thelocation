$(".dark-btn").click(function(){
  $(".box").toggleClass("dark");
  $("body").toggleClass("dark");
});

$(".spin-btn").click(function(){
    $(".box").toggleClass("spin");
});

$(".reveal-btn").click(function(){
    // $(".saul").addClass("reveal")
    // $(".saul").css("display", "block");
    $(".saul").show();
    $(".reveal-btn").hide();
});

$( ".draggable" ).draggable({
    snap: true,
    containment: ".container",
    scroll: false,
    stack: ".draggable",
});