import { addStars,removeStars } from "./compJS/bio.js";

export function sectionCheck(){
    var buttonList=document.querySelectorAll('.overlayButton a');
    var height=(window.innerHeight || document.documentElement.clientHeight);
    const navbarHeight=document.getElementById('navbar').offsetHeight;

    var bioAnimateState=0;

    const accomplishmentDiv=document.querySelectorAll("#timeline ul li");
    
    const progressBar=document.querySelectorAll(".progressbar");
    const progress=document.querySelectorAll(".lowLayer div");

    function isElementInViewport(el,top,right,bottom,left,flag) {
        let rect = el.getBoundingClientRect();
        if(flag)
            return (
                rect.top<top&&rect.bottom>=bottom
                // && rect.top< (window.innerHeight || document.documentElement.clientHeight)/2
            );
        else
            return (
                rect.top>=top&&rect.bottom<=bottom
            );    
    }
    function curSection() {
        for (let i = 0; i < allsections.length; i++) {
            if(isElementInViewport(allsections[i],height,-1,0,-1,true))
            {
                if(allsections[i].id==="bio")
                {
                    buttonUpdate(i);
                    if(isElementInViewport(allsections[i],height,-1,height/3,-1,true))
                    {    
                        if(!bioAnimateState)
                        {
                            bioAnimateState=1;
                            addStars();
                        }
                    }
                    else 
                    {
                        if(bioAnimateState)
                        {
                            bioAnimateState=0;
                            removeStars();
                        }
                    }
                }
                else if(allsections[i].id==="projects")
                {       
                    buttonUpdate(i);
                }
                else if(allsections[i].id==="accomplishmentsWrapper")
                {
                    buttonUpdate(i);
                    for (let i = 0; i < accomplishmentDiv.length; i++) 
                    {
                        if (isElementInViewport(accomplishmentDiv[i],navbarHeight,-1,height,-1,false)) 
                            accomplishmentDiv[i].classList.add("slide-in");
                        else
                            accomplishmentDiv[i].classList.remove("slide-in");
                    }
                }
                else if(allsections[i].id==="skills")
                {
                    buttonUpdate(i);
                    for (let i = 0; i < progressBar.length; i++) {
                        if (isElementInViewport(progressBar[i],navbarHeight,-1,height,-1,false)) 
                        {
                            progress[i].classList.add("aboveLayer");
                            progressBar[i].classList.add("barPop");
                        } 
                        else 
                        {
                            progress[i].classList.remove("aboveLayer");
                            progressBar[i].classList.remove("barPop");
                        }
                      }
                }
                else if(allsections[i].id==="aboutMe")
                {
                    buttonUpdate(i);
                }
                if(i!=allsections.length-1)
                {
                    if(isElementInViewport(allsections[i],height/2,-1,height,-1,true))
                        allArrows[i].style.display="block";
                    else
                        allArrows[i].style.display="none";
                }
            }
        }
    }
    function buttonUpdate(i)
    {
        //this function updates button of section you are on"
        for( var j=0;j<buttonList.length;j++)
        {
            if(i===j){
                buttonList[j].style.fontSize="30px";
                buttonList[j].style.color="white";
            }
            else 
            {
                buttonList[j].style.fontSize="26px";
                buttonList[j].style.color="black";
            }
        }
    }
    window.addEventListener("load", curSection);
    window.addEventListener("scroll", curSection);
    window.addEventListener("resize", curSection);
}