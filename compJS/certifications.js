import {certificateList} from "../data/certifications.js"

export function addCertifications()
{
    var container=document.getElementById("educationCard");
    certificateList.forEach(function(element){
        var placard =document.createElement('div');
        placard.classList.add('educationPlacard');
        container.appendChild(placard);
        var image=document.createElement('img');
        placard.appendChild(image);
        image.style.width="200px"
        image.style.height="200px";
        image.src=element.image;
        var placardText=document.createElement('div');
        placard.appendChild(placardText);
        if(window.innerWidth>1000)
        {
            placardText.style.width="calc(100% - 220px)";
            placardText.style.height="100%";
        }
        else{
            image.style.display="block";
            placardText.style.display="block";
            placardText.style.width="100%";
            placardText.style.height="auto";   
        }
        placardText.innerHTML=element.data;
        placard.addEventListener('mouseenter',()=>{placard.style.animationName="hover-border-in";});
        placard.addEventListener('mouseleave',()=>{placard.style.animationName="hover-border-out";});
    });
}