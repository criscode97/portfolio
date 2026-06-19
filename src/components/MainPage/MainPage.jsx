import "./mainpage.scss";
import { useEffect, useState } from 'react';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';

const ROLES = ["A Data Engineer.", "An AWS Specialist.", "A Cloud Builder."];

function MainPage() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [isOut, setIsOut] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsOut(true);
            setTimeout(() => {
                setRoleIndex(prev => (prev + 1) % ROLES.length);
                setIsOut(false);
            }, 500);
        }, 3200);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="mainpage" className="hero">
            <div className="hero__inner">
                <div className="hero__copy">
                    <span className="hero__eyebrow mono">
                        <span className="hero__eyebrow-prompt">$</span> whoami
                    </span>

                    <h1 className="hero__title">
                        Hi, I'm <span className="text-accent">Cristopher.</span>
                    </h1>

                    <h2 className="hero__role">
                        I'm{' '}
                        <span className={`hero__role-rotator ${isOut ? 'is-out' : ''}`}>
                            <span className="text-accent">{ROLES[roleIndex]}</span>
                        </span>
                    </h2>

                    <p className="hero__sub">
                        Building AWS-native data platforms at NYCSBUS since 2022 &mdash;
                        real-time, batch, and event-driven pipelines that turn operational
                        data into decisions.
                    </p>

                    <div className="hero__ctas">
                        <a href="#projects" className="btn btn--primary">
                            View Projects <FiArrowRight />
                        </a>
                        <a
                            href="assets/resume.pdf"
                            download="CrisSoto.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--ghost"
                        >
                            <FiDownload /> Download Resume
                        </a>
                        <a href="mailto:criscodesnyc@gmail.com" className="btn btn--ghost">
                            <FiMail /> Get in Touch
                        </a>
                    </div>

                    <ul className="hero__pills">
                        <li>AWS</li>
                        <li>Python</li>
                        <li>Airflow</li>
                        <li>Lambda</li>
                        <li>Kinesis</li>
                        <li>PostgreSQL</li>
                    </ul>
                </div>

                <div className="hero__visual">
                    <div className="hero__portrait">
                        <div className="hero__portrait-ring" aria-hidden="true"></div>
                        <div className="hero__portrait-glow" aria-hidden="true"></div>
                        <img src="assets/me.png" alt="Cristopher Soto" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainPage;
