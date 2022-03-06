import "./resume.scss";
import {useState} from "react";
import Skills from "./Skills/Skills";
import Education from "./Education/Education";
import {HiOutlineDownload } from "react-icons/hi";
import Work from "./Work/Work";


function Resume() {
    const [selected, setSelected] = useState(0);
    
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(0);
        }

        setSelected(i);
    };

    
    return (
            <section id="resume">
                <div className="resume">
                <div className="accordion">
                    <div className="item">
                        <div className="title" onClick={()=> toggle(1)}>
                            <h1> Skills</h1>
                        </div>
                        <div className={selected === 1 ? 'contentShow' : 'content'}> 
                            <Skills />
                        </div>
                    </div>
                    <div className="item">
                        <div className="title" onClick={()=> toggle(2)}>
                        <h1> Education</h1>
                        </div>
                        <div className={selected === 2 ? 'contentShow' : 'content'}> 
                            <Education />
                        </div>
                        
                    </div>
                    <div className="item">
                        <div className="title" onClick={()=> toggle(3)}>
                            <h1>Work Experience</h1>
                            </div>
                            <div className={selected === 3 ? 'contentShow' : 'content'}> 
                            <Work />
                        </div>
                    </div>
                    <div className="item">
                        <div className="downloadPDF">
                            <a href="assets/resume.pdf" download="CrisSoto.pdf" target='_blank'>
                                <h4>PDF <HiOutlineDownload/></h4> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         
    );
}

export default Resume;