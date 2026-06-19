import "./skills.scss";

const categories = [
    {
        title: "Cloud & AWS",
        icon: "assets/icons/awsicon.png",
        skills: [
            "Lambda", "Glue", "EMR", "Kinesis", "S3", "SES", "SNS",
            "CloudWatch", "Cognito", "CloudFormation", "Amplify",
            "Textract", "Connect", "DynamoDB", "Pinpoint", "RDS",
        ],
    },
    {
        title: "Data & Warehousing",
        icon: "assets/icons/postgresqlicon.png",
        skills: [
            "PostgreSQL", "Aurora", "Redshift", "DynamoDB",
            "Star-schema modeling", "SQLite",
        ],
    },
    {
        title: "Data Engineering",
        icon: "assets/icons/airflow_transparent.png",
        skills: [
            "Apache Airflow", "Apache Spark", "Tesseract OCR",
            "ETL / ELT", "Streaming", "Event-driven",
        ],
    },
    {
        title: "Languages",
        icon: "assets/icons/pythonicon.png",
        skills: ["Python", "SQL", "JavaScript"],
    },
    {
        title: "Frontend & Tools",
        icon: "assets/icons/reacticon.png",
        skills: [
            "React", "Sass", "HTML", "CSS",
            "Bootstrap", "Git", "GitHub",
        ],
    },
];

function Skills() {
    return (
        <div className="skills-grid">
            {categories.map(category => (
                <div className="skills-card" key={category.title}>
                    <div className="skills-card__header">
                        <img
                            src={category.icon}
                            alt=""
                            className="skills-card__icon"
                            aria-hidden="true"
                        />
                        <h3 className="skills-card__title">{category.title}</h3>
                    </div>
                    <ul className="skills-card__chips">
                        {category.skills.map(skill => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Skills;
