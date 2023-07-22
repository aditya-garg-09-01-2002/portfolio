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
            projectTitle.classList.add('titleDiv');
            projectTitle.style.fontFamily="Zero";
            projectTitle.style.textAlign="center";
            projectTitle.style.textDecoration="Underline";
            projectTitle.style.wordSpacing="10px";
            projectTitle.style.marginBottom="10px";
            projectTitle.style.fontSize=30+"px";
            projectDesc=document.createElement('div');
            projectLeft.appendChild(projectTitle);
            projectLeft.appendChild(projectDesc);
            // projectTitle.style.marginBottom=10+"px";
            if(element.placardExpand)projectRight.setAttribute('onmouseenter',"fun1()");
        })();
        //this function adds the data in the above created tags
        (function(){
            projectTitle.innerText=element.title;
            projectDesc.innerHTML=element.desc;
            projectRight.innerHTML=element.media;
            var temp,innerTemp;
            //the function below is to add project domains
            (function(){
                temp=document.createElement('div');
                temp.style.display="flex";
                temp.style.flexWrap="Wrap";
                temp.style.alignItems="Center";
                temp.style.width="100%";
                innerTemp=document.createElement('span');
                innerTemp.innerText="Project Domain(s) :";
                innerTemp.style.marginBottom="15px";
                innerTemp.style.marginLeft="10px";
                innerTemp.style.marginRight="10px";
                temp.appendChild(innerTemp);
                element.projectCategory.forEach(function(e){
                    innerTemp=document.createElement('span');
                    innerTemp.style.width="auto";
                    innerTemp.style.fontSize="18px";
                    innerTemp.innerText=e;
                    innerTemp.style.textShadow="none";
                    innerTemp.style.marginBottom="15px";
                    innerTemp.style.marginLeft="10px";
                    innerTemp.style.marginRight="10px";
                    innerTemp.style.padding="10px 10px";
                    innerTemp.style.boxSizing="border-box";
                    innerTemp.style.boxShadow="1px 1px 5px black,1px -1px 5px black,-1px 1px 5px black, -1px -1px 5px black "
                    innerTemp.style.borderRadius="10px";
                    innerTemp.style.backgroundColor="rgba(0,0,0,0.5)"
                    temp.appendChild(innerTemp);
                });
                projectBottom.appendChild(temp);
            })();
            //the function below is to add skills involved in the project
            (function(){
                temp=document.createElement('div');
                temp.style.display="flex";
                temp.style.flexWrap="Wrap";
                temp.style.alignItems="Center";
                temp.style.width="100%";
                innerTemp=document.createElement('span');
                innerTemp.innerText="Skills :";
                innerTemp.style.marginBottom="15px";
                innerTemp.style.marginLeft="10px";
                innerTemp.style.marginRight="10px";
                temp.appendChild(innerTemp);
                element.skills.forEach(function(e){
                    innerTemp=document.createElement('span');
                    innerTemp.style.width="auto";
                    innerTemp.style.fontSize="18px";
                    innerTemp.style.textShadow="none";
                    innerTemp.innerText=e;
                    innerTemp.style.marginBottom="15px";
                    innerTemp.style.marginLeft="10px";
                    innerTemp.style.marginRight="10px";
                    innerTemp.style.padding="10px 10px";
                    innerTemp.style.boxSizing="border-box";
                    innerTemp.style.boxShadow="1px 1px 5px black,1px -1px 5px black,-1px 1px 5px black, -1px -1px 5px black "
                    innerTemp.style.borderRadius="10px";
                    innerTemp.style.backgroundColor="rgba(0,0,0,0.5)"
                    temp.appendChild(innerTemp);
                });
                projectBottom.appendChild(temp);
            })();
            //the function below is to add link embeds of the project
            (function(){
                
                temp=document.createElement('div');
                temp.style.display="flex";
                temp.style.flexWrap="Wrap";
                temp.style.alignItems="Center";
                temp.style.width="100%";
                innerTemp=document.createElement('span');
                innerTemp.innerText="Links :";
                innerTemp.style.marginBottom="10px";
                innerTemp.style.marginLeft="10px";
                innerTemp.style.marginRight="10px";
                temp.appendChild(innerTemp);
                element.links.forEach(function(e){
                    innerTemp=document.createElement('span');
                    innerTemp.style.width="auto";
                    innerTemp.style.marginBottom="10px";
                    innerTemp.style.marginLeft="10px";
                    innerTemp.style.textShadow="none";
                    innerTemp.style.marginRight="10px";
                    innerTemp.style.padding="10px 10px";
                    innerTemp.style.boxSizing="border-box";
                    innerTemp.style.boxShadow="1px 1px 5px black,1px -1px 5px black,-1px 1px 5px black, -1px -1px 5px black "
                    innerTemp.style.borderRadius="10px";
                    innerTemp.style.backgroundColor="rgba(0,0,0,0.5)"
                    var anchor=document.createElement('a');
                    anchor.href=e.url;
                    var icon =document.createElement('i');
                    icon.classList.add("fa");
                    icon.classList.add("fa-"+e.target);
                    innerTemp.appendChild(anchor);
                    anchor.appendChild(icon);
                    temp.appendChild(innerTemp);
                    icon.style.setProperty("--t-color","white");
                    anchor.style.textDecoration="none";
                    icon.style.fontSize="25px";
                });
                projectBottom.appendChild(temp);
            })();
        })();
    }
}