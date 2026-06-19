import "./resume.scss";
import { useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import Work from "./Work/Work";

const sections = [
    { id: "work", label: "Work Experience", Component: Work },
    { id: "skills", label: "Skills", Component: Skills },
    { id: "education", label: "Education & Certifications", Component: Education },
];

function Resume() {
    const [selected, setSelected] = useState("work");

    const toggle = id => setSelected(prev => (prev === id ? null : id));

    return (
        <section id="resume" className="resume">
            <div className="resume__inner">
                <header className="resume__header">
                    <span className="resume__eyebrow mono">
                        <span className="resume__eyebrow-prompt">//</span> resume
                    </span>
                    <div className="resume__title-row">
                        <h2 className="resume__title">Resume.</h2>
                        <a
                            href="assets/resume.pdf"
                            download="CrisSoto.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume__download"
                        >
                            <HiOutlineDownload /> Download PDF
                        </a>
                    </div>
                </header>

                <div className="accordion">
                    {sections.map(({ id, label, Component }) => {
                        const isOpen = selected === id;
                        return (
                            <div
                                key={id}
                                className={`accordion__item ${isOpen ? "is-open" : ""}`}
                            >
                                <button
                                    type="button"
                                    className="accordion__title"
                                    onClick={() => toggle(id)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{label}</span>
                                    <FiChevronDown className="accordion__chevron" />
                                </button>
                                <div className="accordion__content">
                                    <div className="accordion__content-inner">
                                        <Component />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Resume;
