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
function slider() {
    var reveals = document.querySelectorAll(".slider");

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
window.addEventListener("scroll", slider);

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
$(".princeton-pic").on("click", function()
{
    window.open('experiences.html', "_self");
});
$(".rowing-pic").on("click", function()
{
    window.open('athletics.html', "_self")
});
$(".carts-logo").on("click", function()
{
    window.open('https://www.cartsmobility.com/', "_self");
});
$(".gitlogo").on("click", function()
{
    window.open('https://github.com/Floydbene', "_self");
});
$(".lilogo").on("click", function()
{
    window.open('https://www.linkedin.com/in/floydbenedikter/', "_self")
});
$(".gmaillogo").on("click", function()
{
    window.location.href = "mailto:floydb@princeton.edu";
});

