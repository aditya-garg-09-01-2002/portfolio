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