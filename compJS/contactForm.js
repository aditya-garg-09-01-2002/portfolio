var check=0;
function projectYes(){
    if(!check){
        var height;
        height=document.getElementById('descCont').getBoundingClientRect().top;
    }
    document.getElementById('projectDomain').style.display="flex";
    if(!check){
        height=document.getElementById('descCont').getBoundingClientRect().top-height;
        document.getElementById('descCont').style.setProperty('--height-translate',-height+"px");
        document.getElementById('submitButton').style.setProperty('--height-translate',-height+"px");
        check=1;
    }
    document.getElementById('projectDomain').style.animationName="bringInProjectDomain";
    document.getElementById('descCont').style.animationName="shiftMessageDown";
    document.getElementById('submitButton').style.animationName="shiftMessageDown";
}
function projectNo(){
    setTimeout(()=>{
        document.getElementById('projectDomain').style.display="none";
    },300);
    document.getElementById('descCont').style.animationName="shiftMessageUp";
    document.getElementById('projectDomain').style.animationName="bringOutProjectDomain";
    document.getElementById('submitButton').style.animationName="shiftMessageUp";
}

const firebaseConfig = {
    apiKey: "AIzaSyB-oNacJ1gm1Gk5psE1n8FzfJBCOdBZBNc",
    authDomain: "personal-portfolio-ag1.firebaseapp.com",
    databaseURL: "https://personal-portfolio-ag1-default-rtdb.firebaseio.com",
    projectId: "personal-portfolio-ag1",
    storageBucket: "personal-portfolio-ag1.appspot.com",
    messagingSenderId: "656333526471",
    appId: "1:656333526471:web:419a9373a222082e54b5e2",
    measurementId: "G-R0MEVWSEMP"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("contactForm");


const val = (id) => {
    return document.getElementById(id).value;
};
function overrideSubmit(event){
    event.preventDefault();
    var flag=0;
    var name=val("name");
    var mail=val("mail");
    if(name==="")
    {
        document.getElementById("name").style.backgroundColor="rgba(255,0,0,0.3)";
        flag=1;
    }
    else if(!validateNameSubmit(name))
    {
        document.getElementById("name").style.backgroundColor="rgba(255,0,0,0.3)";
        flag=1;
    }
    if(!validateMailSubmit(mail))
    {
        document.getElementById("mail").style.backgroundColor="rgba(255,0,0,0.3)";
        flag=1;
    }
    // console.log(val("name")+" "+val("mail")+" "+flag);
    if(flag)return;
    var projectstatus=document.querySelector("input[name='contactProject']:checked").value;
    var msg=val("desc");
    if(projectstatus==="yes")
    {
        var projectdomain=document.querySelectorAll("input[name='projectDomain']:checked");
        saveMessages(name,mail,projectstatus,Array.from(projectdomain, element => element.getAttribute('value')),JSON.stringify(msg));
    }
    else saveMessages(name,mail,projectstatus,"N/A",JSON.stringify(msg));
}

function saveMessages(name,mail,projectstatus,projectdomain,msg){
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    mail: mail,
    project: projectstatus,
    domains:projectdomain,
    message:msg
  })
  .then(()=>{
    alert("Your message has been Well received.\nEager to read it!!!");
    projectNo();
    document.getElementById("contactForm").reset();
    document.getElementById("mail").style.backgroundColor="transparent";
  })
  .catch(()=>{
    alert("Currently experiencing some issues on back-end.\nPlease try again.");
  });
};

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
function validateName(event)
{
    var y=document.getElementById("name");
    const nameRegex=/^[a-z0-9A-Z ]+$/;
    if(!nameRegex.test(y.value+event.key))event.preventDefault();
    else if(event.code!="Tab")y.style.backgroundColor="transparent";
}
function validateNameSubmit(e)
{
    const nameRegex=/^[a-z0-9A-Z ]+$/;
    if(nameRegex.test(e))return 1;
    return 0;
}
function validateMailSubmit(e)
{
    const emailRegex=/^[a-z0-9.]+@+[a-z]+(\.[a-z]+)+$/;
    if(emailRegex.test(e))return 1;
    return 0;
}