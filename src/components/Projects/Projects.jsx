import "./Projects.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import Carousel from "../Carousel/Carousel";


const projects =[
    {
        'title': 'AWS ETL Pipeline',
        'image': '/assets/nycbusdag.gif',
        'code': 'https://github.com/criscode97/nycbus-airflow-pipeline',
        'demo': 'https://nycbusweeklyreport.herokuapp.com/'
    },
    {
        'title': 'Data Visualization App',
        'image': 'assets/howcommonismyname.gif',
        'code': 'https://github.com/criscode97/HowCommonIsMyName-repo',
        'demo': 'http://howcommonismyname.herokuapp.com'
    },
    {
        'title': 'Server-side CRUD',
        'image': 'assets/mangd.gif',
        'code': 'https://github.com/criscode97/mangd-repo',
        'demo': ' http://www.mangdtodos.com'
    },
    {
        'title': 'Django CRUD API',
        'image': 'assets/budgetin.gif',
        'code': 'https://github.com/criscode97/BudgetInApi-repo',
        'demo': 'https://youtu.be/2_4OXnU8s8w'
    },
    {
        'title': 'Portfolio Website',
        'image': 'assets/portfolio.png',
        'code': 'https://github.com/criscode97',
        'demo': 'criscodes.dev'
    }

]
function Projects() {
    return (
        <section id='projects' className="projects">
             <Carousel items={projects.map(project => <ProjectCard
                image={project.image}
                title={project.title}
                code={project.code}
                demo={project.demo}
                />)}
             />
                

        </section>
    );
}

export default Projects;