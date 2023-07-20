import {skillList} from "./data/skill.js";

export function skill()
{
    skillList.forEach(addSkill);
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