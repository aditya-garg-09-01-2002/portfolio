const sections=[];
var allsections=document.querySelectorAll('.allsects');
var allArrows=document.querySelectorAll('.pageArrow');
allsections.forEach((element)=> {
    sections.push(element.id);
})
function arrowClick(id){
    for(var i=0;i<sections.length-1;i++)
    {
        if(sections[i]===id)
        {
            var toBeScrolled=document.getElementById(sections[i+1]);
            toBeScrolled.scrollIntoView({behavior:"smooth"});
            break;
        }
    }
}

function pageArrowPopulate(){
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top< (window.innerHeight || document.documentElement.clientHeight)/2
        );
    }
    function pageArrowUnlock() {
        for (let i = 0; i < allsections.length-1; i++) {
          if (isElementInViewport(allsections[i])) {
            allArrows[i].style.display="block";
          } else {
            allArrows[i].style.display="none";
          }
        }
    }
    window.addEventListener("load", pageArrowUnlock);
    window.addEventListener("scroll", pageArrowUnlock);
    window.addEventListener("resize", pageArrowUnlock);
};