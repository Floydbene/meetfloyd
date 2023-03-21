function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
    
}
function slide() {
    var reveals = document.querySelectorAll(".slide");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
    
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", slide);

$("img").not(".bck").on("mouseover", function (){
    $(this).animate({
    height: "+=10px",
    width: "+=10px"
    });
});
$("img").not(".bck").on("mouseout", function (){
    $(this).animate({
        height: "-=10px",
        width: "-=10px"
    });
});
$("h3").on("click", function (){
    $('h3').css("color","red");
});
$(".princeton-pic").on("click", function()
{
    window.open('index.html', '_blank');
});
$(".rowing-pic").on("click", function()
{
    window.open('https://www.codexworld.com', '_blank');
});
$(".carts-logo").on("click", function()
{
    window.open('https://www.codexworld.com', '_blank');
});


