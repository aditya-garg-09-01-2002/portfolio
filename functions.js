function fun1()
{
    //this functions comes into play when project media placard is expaned i.e. hovered
    if(width>1000)
    {
        document.body.style.overflow="hidden";
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
        document.body.style.overflow="hidden auto";
    }
}
function openButton(){
    var x=document.getElementById('overlay');
    var y=document.getElementById('navbar');
    var z=document.getElementById('menuButton');
    alert(x.style.display);
    if(x.style.display==="none")
    {
        y.style.backgroundColor="black";
        z.style.border=2+"px solid white";
        y.style.height="auto";
        x.style.height="auto";
        x.style.paddingBottom=0;
        x.style.display="block";
    }
    else 
    {
        y.style.backgroundColor="transparent";
        z.style.border="none";
        y.style.height=40+"px";
        x.style.display="none";
    }
} 