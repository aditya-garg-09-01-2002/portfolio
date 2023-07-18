var z=document.getElementsByClassName('cards');
z=z[1];
const socials=[
    {
        target:"https://www.linkedin.com/in/aditya-garg-3175a4236/",
        logoname:"fa-linkedin",
        bgcolor:"#0077B5",
        tcolor:"white",
    },
    {
        target:"https://github.com/aditya-garg-09-01-2002",
        logoname:"fa-github-square",
        bgcolor:"#171515",
        tcolor:"white",
    },
    {
        target:"https://www.instagram.com/adityagarg_9102/",
        logoname:"fa-instagram",
        tcolor:"white",
        bgcolor:"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
    },
    {
        target:"https://www.facebook.com/adit.garg.921/",
        logoname:"fa-facebook",
        tcolor:"white",
        bgcolor:"#3b5998"
    },
    {
        target:"https://twitter.com/AdityaGarg9102",
        logoname:"fa-twitter",
        tcolor:"white",
        bgcolor:"#00acee"
    },
    {
        target:"https://www.youtube.com/channel/UCtGIZ-fASH4_7XWQ9mhgEwA",
        logoname:"fa-youtube",
        tcolor:"white",
        bgcolor:" #c4302b"
    },
    {
        target:"https://leetcode.com/gargaditya914/",
        logoname:"cib-leetcode",
        tcolor:"white",
        bgcolor:"linear-gradient(to right, #000000 0%,#ffa116 90% , #b3b3b3 100%)"
    },
    {
        target:"https://codeforces.com/profile/Exhaustic",
        logoname:"fa-code",
        tcolor:"white",
        link:"code-forces.png",
        bgcolor:"linear-gradient(to right, #fad261 23%,#188bcb 47%, #bc1d25 82%)"
    },
    {
        target:"https://codeforces.com/profile/aditya_garg_09_01_2002",
        logoname:"fa-code",
        tcolor:"white",
        link:"code-forces.png",
        bgcolor:"linear-gradient(to right, #fad261 23%,#188bcb 47%, #bc1d25 82%)"
    },
    {
        target:"https://www.codechef.com/users/aditya_garg_11",
        link:"codechef.png",
        logoname:"fa-code",
        tcolor:"white",
        bgcolor:"#453424"
    }
]
function addSocials()
{
    const x =document.getElementById('smcontainer');
    socials.forEach(addSocial);
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