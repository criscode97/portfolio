import "./work.scss";

const roles = [
    {
        title: "Data Engineer",
        company: "NYCSBUS",
        period: "Jun 2022 – Present",
        bullets: [
            "Architected and developed end-to-end data pipelines that ingested, transformed, and delivered operational data from external sources into internal business applications, reporting systems, and stakeholder-facing tools.",
            "Built ETL workflows for web-scraped and operational datasets, automating data collection, transformation, and delivery into Google Sheets and other downstream systems used for business reporting and decision-making.",
            "Engineered a real-time parent notification platform for school bus proximity alerts using AWS Lambda, DynamoDB, AWS Pinpoint, and a custom geocoding API powered by OpenStreetMap and deployed behind Amazon EC2 Auto Scaling Groups.",
            "Designed and implemented geospatial data pipelines in Apache Airflow to capture and process school, student, and depot arrival events for school buses, enabling location-based operational tracking and analytics.",
            "Developed event-driven AWS data pipelines in which inbound emails received through Amazon SES triggered Amazon S3 and AWS Lambda workflows to parse, transform, and load structured data into PostgreSQL on Amazon RDS.",
            "Built event-driven, auto-scaling OCR data pipelines using AWS Textract and Tesseract to process user-submitted documents, extract structured data, and support downstream operational and reporting workflows.",
            "Engineered scalable document-processing workflows that dynamically adjusted to user input volume, leveraging serverless and cloud-based architectures to improve reliability, efficiency, and throughput.",
            "Built full-stack internal applications using AWS Amplify, AWS CloudFormation, and Amazon Cognito, delivering secure cloud-based tools with authentication and user management for business operations.",
            "Led the development of a custom CRM and call center platform on Amazon Connect, provisioned through AWS CloudFormation and integrated with proprietary web tools to support customer service and operational workflows.",
            "Created a custom web interface for call center agents using AWS Amplify and backend integrations with Amazon Connect APIs, improving agent productivity and streamlining case management processes.",
            "Implemented real-time and near-real-time streaming data pipelines using Amazon Kinesis, Amazon S3, AWS Lambda, and PostgreSQL to capture, process, and store call center and operational activity data.",
            "Designed and modeled an enterprise data warehouse on Amazon Aurora PostgreSQL, including multiple schemas and star-schema dimensional models to support analytics, reporting, and cross-functional business intelligence use cases.",
            "Built custom monitoring dashboards in Amazon CloudWatch and developed multiple alarm and notification systems using Amazon SNS to proactively detect system failures, pipeline issues, and operational incidents.",
            "Improved platform reliability and operational visibility by implementing automated alerting, centralized monitoring, and failure notification workflows across cloud-based systems and data pipelines.",
            "Collaborated closely with business stakeholders to gather requirements, identify operational pain points, and design scalable cloud-based solutions aligned with business and technical needs.",
            "Drove automation and modernization efforts by replacing manual workflows with scalable, maintainable, and event-driven architectures across the AWS ecosystem.",
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
