const sectionList=[];
var allsections=document.querySelectorAll('.allsects');
var allArrows=document.querySelectorAll('.pageArrow');
allsections.forEach((element)=> {
    sectionList.push(element.id);
})

function arrowClick(id){
    //this function handles clicks on scroll down to next section arrow click
    for(var i=0;i<sectionList.length-1;i++)
    {
        if(sectionList[i]===id)
        {
            var toBeScrolled=document.getElementById(sectionList[i+1]);
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