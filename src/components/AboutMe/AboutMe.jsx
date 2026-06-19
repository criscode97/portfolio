import "./aboutme.scss";

function AboutMe() {
    const birthYear = 1997;
    const birthMonth = 2;
    const today = new Date();
    const age =
        today.getFullYear() -
        birthYear -
        (today.getMonth() + 1 < birthMonth ? 1 : 0);

    const stats = [
        { value: "4+", label: "Years building on AWS" },
        { value: "15+", label: "AWS services in production" },
        { value: "AWS", label: "Certified Data Engineer" },
        { value: "24/7", label: "Real-time pipelines" },
    ];

    return (
        <section id="aboutme" className="about">
            <div className="about__inner">
                <div className="about__intro">
                    <span className="about__eyebrow mono">
                        <span className="about__eyebrow-prompt">//</span> about_me
                    </span>
                    <h2 className="about__title">
                        Hi, I'm Cris &mdash; a {age}-year-old{' '}
                        <span className="text-accent">Data Engineer</span>{' '}
                        based in NYC.
                    </h2>
                    <div className="about__body">
                        <p>
                            I design and build AWS-native data platforms &mdash; event-driven
                            pipelines on <strong>Lambda</strong>, <strong>Kinesis</strong>, and{' '}
                            <strong>SES</strong>, geospatial batch jobs orchestrated in{' '}
                            <strong>Apache Airflow</strong>, and analytics warehouses on{' '}
                            <strong>Aurora PostgreSQL</strong> modeled with star schemas.
                        </p>
                        <p>
                            At <strong>NYCSBUS</strong> I've shipped real-time parent
                            notifications for school-bus proximity alerts, OCR document
                            processing with <strong>Textract</strong> + <strong>Tesseract</strong>,
                            and a custom call-center platform on <strong>Amazon Connect</strong>{' '}
                            &mdash; all instrumented with <strong>CloudWatch</strong> dashboards
                            and <strong>SNS</strong> alerting.
                        </p>
                        <p>
                            I like turning messy operational data into reliable,
                            observable systems that people actually use.
                        </p>
                    </div>
                </div>

                <ul className="about__stats">
                    {stats.map(stat => (
                        <li key={stat.label} className="about__stat">
                            <div className="about__stat-value">{stat.value}</div>
                            <div className="about__stat-label">{stat.label}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default AboutMe;
