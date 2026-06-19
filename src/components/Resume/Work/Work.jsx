import "./work.scss";

const roles = [
    {
        title: "Data Engineer",
        company: "NYCSBUS",
        period: "Jun 2022 – Present",
        bullets: [
            "Architected end-to-end pipelines that ingest, transform, and deliver operational data into internal apps and stakeholder reports.",
            "Built a real-time parent notification platform for school-bus proximity alerts using AWS Lambda, DynamoDB, AWS Pinpoint, and a custom OpenStreetMap-powered geocoding API on EC2 Auto Scaling Groups.",
            "Designed geospatial Airflow pipelines capturing school, student, and depot arrival events for location-based operational analytics.",
            "Built event-driven AWS pipelines where inbound emails via Amazon SES trigger S3 + Lambda workflows that parse, transform, and load data into PostgreSQL on Amazon RDS.",
            "Shipped auto-scaling OCR pipelines with AWS Textract + Tesseract to process user-submitted documents into structured downstream data.",
            "Led a custom CRM and call center on Amazon Connect provisioned via AWS CloudFormation, with React + Amplify agent interfaces and Kinesis-based streaming pipelines.",
            "Modeled an enterprise data warehouse on Amazon Aurora PostgreSQL with star-schema dimensional models and instrumented monitoring + alerting via CloudWatch and SNS.",
        ],
    },
];

function Work() {
    return (
        <div className="work">
            <ul className="work__list">
                {roles.map(role => (
                    <li className="work__role" key={role.company}>
                        <div className="work__role-head">
                            <div className="work__role-title">
                                <h3>{role.title}</h3>
                                <span className="work__role-company">{role.company}</span>
                            </div>
                            <span className="work__role-period">{role.period}</span>
                        </div>
                        <ul className="work__bullets">
                            {role.bullets.map((bullet, idx) => (
                                <li key={idx}>{bullet}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Work;
