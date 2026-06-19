import "./ProjectCard.scss";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectCard({ image, title, description, tech = [], code, demo }) {
    return (
        <article className="project-card">
            <div className="project-card__media">
                <img src={image} alt={title} loading="lazy" />
                <div className="project-card__overlay" />
            </div>

            <div className="project-card__body">
                <h3 className="project-card__title">{title}</h3>

                {description && (
                    <p
                        className="project-card__desc"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}

                {tech.length > 0 && (
                    <ul className="project-card__tech">
                        {tech.map(t => (
                            <li key={t}>{t}</li>
                        ))}
                    </ul>
                )}

                <div className="project-card__actions">
                    {code && (
                        <a
                            href={code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__btn"
                            aria-label={`View ${title} source on GitHub`}
                        >
                            <FiGithub /> Code
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card__btn project-card__btn--primary"
                            aria-label={`View ${title} demo`}
                        >
                            <FiExternalLink /> Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;
