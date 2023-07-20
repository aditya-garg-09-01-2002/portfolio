import {projectList} from "../data/project.js"; 
export function projectPopulate(){
    var container, project, projectLeft,projectRight,projectBottom,projectTitle,projectDesc;
    projectList.forEach(addingProjects)
    function addingProjects(element){
        //this function creates all the tags in the HTML file 
        (function(){
            container=document.getElementById("projects");
            project=document.createElement('div');
            project.classList.add('project');
            container.appendChild(project);
            projectLeft=document.createElement('div');
            projectRight=document.createElement('div');
            projectBottom=document.createElement('div');
            projectLeft.classList.add("projectLeft");
            projectRight.classList.add("projectRight");
            projectBottom.classList.add("projectBottom");
            project.appendChild(projectLeft);
            project.appendChild(projectRight);
            project.appendChild(projectBottom);
            projectTitle=document.createElement('div');
            projectDesc=document.createElement('div');
            projectLeft.appendChild(projectTitle);
            projectLeft.appendChild(projectDesc);
            projectTitle.style.marginBottom=10+"px";
            projectRight.setAttribute('onmouseenter',"fun1()");
        })();
        //this function adds the data in the above created tags
        (function(){
            projectTitle.innerText=element.title;
            projectDesc.innerText=element.desc;
            projectRight.innerHTML=element.media;
            var temp=document.createElement('div');
            temp.innerHTML=element.skills;
            projectBottom.appendChild(temp);
            element.links.forEach(addingLinks);
            function addingLinks(link){
                temp=document.createElement('div');
                temp.innerHTML=link;
                projectBottom.appendChild(temp);
            }
        })();
    }
}