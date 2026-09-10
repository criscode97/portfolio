import "./skills.scss";

const categories = [
    {
        title: "Cloud Platforms & Services",
        icon: "assets/icons/awsicon.png",
        skills: [
            "Lambda", "Amplify", "Connect", "CloudFormation", "Cognito",
            "Kinesis", "S3", "SES", "SNS", "CloudWatch", "Textract",
            "Glue", "EMR",
        ],
    },
    {
        title: "Databases & Warehousing",
        icon: "assets/icons/postgresqlicon.png",
        skills: [
            "PostgreSQL", "Amazon Aurora", "DynamoDB", "Amazon Redshift",
        ],
    },
    {
        title: "Frameworks & Tools",
        icon: "assets/icons/airflow_transparent.png",
        skills: [
            "React", "Apache Airflow", "Tesseract", "Google Sheets",
        ],
    },
    {
        title: "Programming Languages",
        icon: "assets/icons/pythonicon.png",
        skills: ["Python", "SQL", "JavaScript"],
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
