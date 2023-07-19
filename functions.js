function fun1()
{
    //this functions comes into play when project media placard is expaned i.e. hovered
    if(width>1000)
    {
        disableScroll();
        document.getElementsByClassName('placard')[0].classList.add('placardExpanded');
        var x=document.getElementById('overlay2');
        x.classList.add("overlay2");
    }
}
function fun2()
{
    //this functions comes into play when the mouse stops hovering the project media placard
    if(width>1000)
    {
        document.getElementsByClassName('placard')[0].classList.remove('placardExpanded');
        var x=document.getElementById('overlay2');
        x.classList.remove("overlay2");
        enableScroll();
    }
}

function disableScroll() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
} 
function enableScroll() {
    window.onscroll = function() {};
}