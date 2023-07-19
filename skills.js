import {skillList} from "./data/skill.js";

export function skill()
{
    skillList.forEach(addSkill);
    skillsAnimate();
}
function addSkill(element)
{
    const container=document.getElementById('skillsRight');
    const innerContainer=document.createElement('div');
    innerContainer.classList.add('progressbar');
    const name=document.createElement('label');
    const bottom=document.createElement('div');
    bottom.classList.add("lowLayer");
    const top=document.createElement('div');
    top.classList.add("aboveLayer");
    top.style.setProperty('--value',element.progress+"%");
    name.innerText=element.skillName;
    bottom.appendChild(top);
    innerContainer.appendChild(name);
    innerContainer.appendChild(bottom);
    container.appendChild(innerContainer);
}   
function skillsAnimate(){
    const items2=document.querySelectorAll(".progressbar");
    const items=document.querySelectorAll(".lowLayer div");
    const navbarHeight=document.getElementById('navbar').offsetHeight;
    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= navbarHeight && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
    function slideIn() {
        for (let i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("aboveLayer");
            items2[i].classList.add("barPop");
          } else {
            items[i].classList.remove("aboveLayer");
            items2[i].classList.remove("barPop");
          }
        }
    }
    window.addEventListener("load", slideIn);
    window.addEventListener("scroll", slideIn);
    window.addEventListener("resize", slideIn);
};