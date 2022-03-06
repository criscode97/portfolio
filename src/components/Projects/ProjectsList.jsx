import "./projectslist.scss";
import ProjectCard from "./ProjectCard";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {useState} from "react";

function ProjectsList(props){

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick  = ((way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : (props.projects.length-1))
        : setCurrentSlide(currentSlide < (props.projects.length-1) ? currentSlide+1: 0);
    });
    return (
        <section>
        <div className="projectsList">
        <div className="carousel" style={{transform: `translateX(-${currentSlide * 30}vw)`}}>
            <div className="container">
                {props.projects.map(project => <ProjectCard
                image={project.image}
                title={project.title}
                code={project.code}
                demo={project.demo}
                />)}
            </div>
            </div>
            <div className="leftSide" />
            <BsChevronCompactLeft className="arrowLeft" onClick={()=>handleClick("left")}/>
            <div className="rightSide" />
            <BsChevronCompactRight className="arrowRight"onClick={()=>handleClick("right")}/>  
        </div>
    </section>
    );
}

export default ProjectsList;