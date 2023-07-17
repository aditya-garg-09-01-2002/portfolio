function fun1()
{
    if(width>1000)
    {
        disable();
        document.getElementsByClassName('placard')[0].classList.add('placardExpanded');
        var x=document.getElementById('overlay2');
        x.classList.add("overlay2");
    }
}
function fun2()
{
    if(width>1000)
    {
        document.getElementsByClassName('placard')[0].classList.remove('placardExpanded');
        var x=document.getElementById('overlay2');
        x.classList.remove("overlay2");
        enable();
    }
}
function disable() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
    window.scrollTo(LeftScroll, TopScroll);
            };
}
    
function enable() {
    window.onscroll = function() {};
}