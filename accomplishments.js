import {accomplishmentList} from "./data/accomplishment.js";

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
    })();
}