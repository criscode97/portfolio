import "./projects.scss";
import ProjectsList from "./ProjectsList";
import {projects} from "./myprojects.js";


function Projects() {
    return (
        <section id='projects'>
             <div className="projects">
                <ProjectsList projects={projects}/>
             </div>
        </section>
    );
}

export default Projects;