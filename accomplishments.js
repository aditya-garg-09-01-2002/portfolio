import {accomplishmentList} from "./data/accomplishment.js";

function timelineAnimate(){
    const items=document.querySelectorAll("#timeline ul li");
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function slideIn() {
        for (let i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("slide-in");
          } else {
            items[i].classList.remove("slide-in");
          }
        }
    }
    window.addEventListener("load", slideIn);
    window.addEventListener("scroll", slideIn);
    window.addEventListener("resize", slideIn);
};

export function timeline()
{
    const container=document.getElementById('timeline');
    const innerContainer=document.createElement('ul');
    container.appendChild(innerContainer);
    accomplishmentList.forEach(addAccomplishment);
    function addAccomplishment(element)
    {
        const listitem=document.createElement('li');
        const divitem=document.createElement('div');
        const timeitem=document.createElement('time');
        innerContainer.appendChild(listitem);
        listitem.appendChild(divitem);
        divitem.appendChild(timeitem);
        timeitem.innerText=element.time;
        divitem.innerHTML+=element.content;
    } 
    (function(){
        var x =document.getElementById('accomplishments');
        // console.log(x.offsetHeight/window.innerHeight*100);
        x.style.setProperty('--before-height',x.offsetHeight+"px");
        timelineAnimate();
    })();
}