import "./ProjectCard.scss"

function ProjectCard(props) {

    return (
        <div className="cardcontainer">
            <div className="card">
                <img src={props.image} />
                <h3>{props.title}
                <ul>
                    <li><a href={props.code} target="_blank">code</a></li>
                    <li><a href={props.demo} target="_blank">demo</a></li>
                </ul>
                </h3>
                
            </div>
            <div className="technologies">
                {props.children}
            </div>
        </div>
    )
}

export default ProjectCard;