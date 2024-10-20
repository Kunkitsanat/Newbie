document.addEventListener('DOMContentLoaded',function(){
    alert("Hello World");    
})

function ChangeName(){
    document.getElementById("name").innerHTML("Chokedee not Devcommu")
}

let programCount = 5;
function Addproject() {
    let project_grid = document.getElementById("project-container");
    let project_card =document.createElement("div");
    project_card.className = "project_card";
    project_card.innerHTML = `<img src="./images/projects/project1.png" alt="Project 1" class="project-image">
                <div class="project-info">
                    <h3>Project 1 Title</h3>
                    <p>Brief description of Project 1. Explain what it does and the technologies used.</p>
                    <div class="project-links">
                        <a href="https://chokdee-sigazen.github.io/Algorithm.io/" class="btn">View Project</a>
                        <a href="https://github.com/Chokdee-Sigazen/Algorithm.io" class="btn">GitHub</a>
                    </div>`
    project_grid.appendChild(project_card)
}