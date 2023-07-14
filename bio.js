function addStarDiv(){
    var x=document.getElementById('night');
    for(var i=0;i<20;i++)
    {
        (function(){x.appendChild(document.createElement('div'));})();
    }
}
function addStars(){
    var x=document.getElementById('night').querySelectorAll("*");
    x.forEach((element) => 
        {
            element.classList.add('shooting_star');
            var delay=Math.floor(Math.random()*10000);
            element.style.top=document.getElementById('night').offsetHeight*0.2+Math.floor(Math.random()*document.getElementById('night').offsetHeight/1.5)+"px";
            element.style.left=document.getElementById('night').offsetWidth*0.1+Math.floor(Math.random()*document.getElementById('night').offsetWidth/1.5)+"px";
            element.style.animationDelay=delay+"ms";
            element.style.setProperty('--delay',delay+"ms");
        }
    )
}
function removeStars(){
    document.getElementById("night").querySelectorAll("*").forEach((element)=>{element.classList.remove('shooting_star');}
    )
}
function bioAnimate(){
    var animateState=0;
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        // alert(rect.bottom>=window.innerHeight/2);
        return (rect.bottom>= (window.innerHeight/3) );
    }
    function slideIn() {
        if(isElementInViewport(document.getElementById('bio')))
        {
            if(!animateState)
            {
                animateState=1;
                addStars();
            }
        }
        else 
        {
            if(animateState)
            {
                animateState=0;
                removeStars();
            }
        }
    }
    window.addEventListener("load", slideIn);
    window.addEventListener("scroll", slideIn);
    window.addEventListener("resize", slideIn);
};
