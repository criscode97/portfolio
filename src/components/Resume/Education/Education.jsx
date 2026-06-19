import "./education.scss";
import { FiAward, FiBookOpen, FiExternalLink } from "react-icons/fi";

const certifications = [
    {
        title: "AWS Certified Data Engineer – Associate",
        meta: "Amazon Web Services",
    },
];

const college = [
    {
        heading: "Coursework toward B.S. in Computer Science",
        meta: "Hunter College, CUNY · GPA 3.8 · 2020–2023",
    },
];

const selfTaught = [
    { label: "Harvard's CS50", href: "https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" },
    { label: "CS50's Web Programming", href: "https://cs50.harvard.edu/web/2020/" },
    { label: "AWS Certified Developer — Stephane Maarek", href: "https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/" },
    { label: "Django 3 — Nick Walter", href: "https://www.udemy.com/course/django-3-make-websites-with-python-tutorial-beginner-learn-bootstrap/" },
    { label: "Python 3 Bootcamp — Cole Steele", href: "https://www.udemy.com/course/the-modern-python3-bootcamp/" },
    { label: "Python Bible — Ziyad Yehia", href: "https://www.udemy.com/course/the-python-bible/" },
    { label: "React Complete Guide — Maximilian Schwarzmüller", href: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
    { label: "Complete SQL Bootcamp — Jose Portilla", href: "https://www.udemy.com/course/the-complete-sql-bootcamp/" },
    { label: "Complete JavaScript — Jonas Schmedtmann", href: "https://www.udemy.com/course/the-complete-javascript-course/" },
    { label: "HTML, CSS, Sass — Brad Traversy", href: "https://www.udemy.com/course/modern-html-css-from-the-beginning/" },
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

            <div className="edu-card edu-card--wide">
                <div className="edu-card__header">
                    <FiExternalLink className="edu-card__icon" />
                    <h3>Self-Taught Coursework</h3>
                </div>
                <hr />
                <ul className="edu-card__list edu-card__list--two-col">
                    {selfTaught.map(course => (
                        <li key={course.href}>
                            <a href={course.href} target="_blank" rel="noopener noreferrer">
                                {course.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Education;
