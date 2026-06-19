import "./Projects.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import Carousel from "../Carousel/Carousel";

const projects = [
    {
        title: 'AWS ETL Pipeline',
        description: 'Apache Airflow DAGs ingesting NYC bus data into Postgres for weekly operational reports.',
        tech: ['Airflow', 'AWS', 'Python', 'PostgreSQL'],
        image: '/assets/nycbusdag.gif',
        code: 'https://github.com/criscode97/nycbus-airflow-pipeline',
        demo: 'https://nycbusweeklyreport.herokuapp.com/',
    },
    {
        title: 'Data Visualization App',
        description: 'Interactive Flask + Plotly app that surfaces US Census first-name frequency over time.',
        tech: ['Python', 'Flask', 'Plotly', 'Pandas'],
        image: '/assets/howcommonismyname.gif',
        code: 'https://github.com/criscode97/HowCommonIsMyName-repo',
        demo: 'http://howcommonismyname.herokuapp.com',
    },
    {
        title: 'Server-side CRUD',
        description: 'Full-stack todo manager with server-rendered views and persistent task tracking.',
        tech: ['Node.js', 'Express', 'MongoDB'],
        image: '/assets/mangd.gif',
        code: 'https://github.com/criscode97/mangd-repo',
        demo: 'http://www.mangdtodos.com',
    },
    {
        title: 'Django CRUD API',
        description: 'REST API for personal budget tracking with token auth and category-based reporting.',
        tech: ['Django', 'DRF', 'PostgreSQL', 'Python'],
        image: '/assets/budgetin.gif',
        code: 'https://github.com/criscode97/BudgetInApi-repo',
        demo: 'https://youtu.be/2_4OXnU8s8w',
    },
    {
        title: 'Portfolio Website',
        description: 'This site &mdash; React + SCSS single-page portfolio deployed via AWS Amplify.',
        tech: ['React', 'SCSS', 'AWS Amplify'],
        image: '/assets/portfolio.png',
        code: 'https://github.com/criscode97',
        demo: 'https://cristophersoto.com',
    },
];

function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projects__inner">
                <header className="projects__header">
                    <span className="projects__eyebrow mono">
                        <span className="projects__eyebrow-prompt">//</span> projects
                    </span>
                    <h2 className="projects__title">Things I've shipped.</h2>
                    <p className="projects__sub">
                        A selection of public work &mdash; data pipelines, APIs, and apps.
                    </p>
                </header>

                <Carousel
                    items={projects.map((project, idx) => (
                        <ProjectCard
                            key={idx}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            code={project.code}
                            demo={project.demo}
                        />
                    ))}
                />
            </div>
        </section>
    );
}

export default Projects;
