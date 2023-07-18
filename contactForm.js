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
function overrideSubmit(event){
    event.preventDefault();
    alert("roboya says, this form is not working due to backend issues");
}
function validateMail(event)
{
    var x=document.getElementById("mail");
    if(event.key==" "||event.code==="Space"||event.keyCode==32)event.preventDefault();
    else{
        const emailRegex=/^[a-z0-9.]+@+[a-z]+(\.[a-z]+)+$/;
        if(emailRegex.test(x.value+event.key))document.getElementById("mail").style.backgroundColor="rgba(0,255,0,0.3)";
        else document.getElementById("mail").style.backgroundColor="rgba(255,0,0,0.3)";
    }
}
function validateName(event,x)
{
    var y;
    if(x==='f')y=document.getElementById("fname");
    else if(x==='l')y=document.getElementById("lname");
    if(event.key==" "||event.code=="Space"||event.keyCode==32)event.preventDefault();
    else{
        const nameRegex=/^[a-z0-9A-Z]+$/;
        if(!nameRegex.test(y.value+event.key))event.preventDefault();
    }
}