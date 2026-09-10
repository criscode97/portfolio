import "./education.scss";
import { FiAward, FiBookOpen } from "react-icons/fi";

const certifications = [
    {
        title: "AWS Certified Data Engineer – Associate",
        meta: "Amazon Web Services · Score 757 · 2026",
    },
    {
        title: "AWS Certified Developer – Associate",
        meta: "Amazon Web Services · Score 810 · 2022",
    },
];

const college = [
    {
        heading: "Coursework toward B.S. in Computer Science",
        meta: "Hunter College, CUNY · GPA 3.8 · 2020–2023",
    },
];

function Education() {
    return (
        <div className="education">
            <div className="edu-card">
                <div className="edu-card__header">
                    <FiAward className="edu-card__icon" />
                    <h3>Certifications</h3>
                </div>
                <hr />
                <ul className="edu-card__list">
                    {certifications.map(cert => (
                        <li key={cert.title}>
                            <div className="edu-card__heading">{cert.title}</div>
                            <div className="edu-card__meta">{cert.meta}</div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="edu-card">
                <div className="edu-card__header">
                    <FiBookOpen className="edu-card__icon" />
                    <h3>Education</h3>
                </div>
                <hr />
                <ul className="edu-card__list">
                    {college.map(item => (
                        <li key={item.heading}>
                            <div className="edu-card__heading">{item.heading}</div>
                            <div className="edu-card__meta">{item.meta}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Education;
