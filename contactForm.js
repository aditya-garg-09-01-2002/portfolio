var check=0;
function projectYes(){
    if(!check){
        var height;
        height=document.getElementById('desc').getBoundingClientRect().top;
    }
    document.getElementById('projectDomain').style.display="flex";
    if(!check){
        height=document.getElementById('desc').getBoundingClientRect().top-height;
        document.getElementById('desc').style.setProperty('--height-translate',-height+"px");
        document.getElementById('submitButton').style.setProperty('--height-translate',-height+"px");
        check=1;
    }
    document.getElementById('projectDomain').style.animationName="bringInProjectDomain";
    document.getElementById('desc').style.animationName="shiftMessageDown";
    document.getElementById('submitButton').style.animationName="shiftMessageDown";
}
function projectNo(){
    setTimeout(()=>{
        document.getElementById('projectDomain').style.display="none";
    },300);
    document.getElementById('desc').style.animationName="shiftMessageUp";
    document.getElementById('projectDomain').style.animationName="bringOutProjectDomain";
    document.getElementById('submitButton').style.animationName="shiftMessageUp";
}