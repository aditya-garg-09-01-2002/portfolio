import {socialList} from "./data/social.js";
export function addSocials()
{
    var z=document.getElementsByClassName('cards');
    z=z[1];
    const x =document.getElementById('smcontainer');
    socialList.forEach(addSocial);
    function addSocial(element)
    {
        var a=document.createElement('div');
        var b=document.createElement('div');
        var c=document.createElement('a');
        var d=document.createElement('i');
        c.href=element.target;
        a.classList.add('sm');
        a.style.setProperty('--bg-color',element.bgcolor);
        a.style.setProperty('--t-color',element.tcolor);
        b.classList.add('smicon');
        if(!(element.link===undefined))
        {
            b.classList.add('hasImage');
            d=document.createElement('img');
            d.src=element.link;
        }
        else
        {
            d.classList.add("fa");
            b.classList.add("noImage");
            d.classList.add(element.logoname);
        }
        x.appendChild(a);
        a.appendChild(b);
        b.appendChild(c);
        c.appendChild(d);
    }
}

