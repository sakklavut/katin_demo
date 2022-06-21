let toToButton = document.querySelector(".toTop");
toToButton.onclick = function(){scrollToTop}
window.onscroll = function(){scroll()};
function scroll(){
    if(document.body.scrollTop >= 30 || document.documentElement.scrollToTop >= 30){
        toToButton.style.transform = "translateY(0)";
    }else{
        toToButton.style.transform = "translateY(100px)";
    }
}
function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}