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
        placardText.style.width="calc(100% - 200px)";
        placardText.style.height="100%";
        placardText.style.backgroundColor='white';
    });
}