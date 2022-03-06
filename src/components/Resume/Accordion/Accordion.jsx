import "./resume.scss";
import {useState, useEffect, useRef} from "react";

function Resume() {
    const [selected, setSelected] = useState(0);
    
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(0);
        }

        setSelected(i);
    };

    
    return (
                <div className="accordion">
                    <div className="item">
                        <div className="title" onClick={()=> toggle(1)}>
                            <h1> Skills</h1>
                        </div>
                        <div className={selected === 1 ? 'contentShow' : 'content'}> 
                            HeLLO mY bABY 
                        </div>
                    </div>
                    <div className="item">
                        <div className="title" onClick={()=> toggle(2)}>
                        <h1> Education</h1>
                        <div className={selected === 2 ? 'contentShow' : 'content'}> 
                            hello my darling 
                        </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="title" onClick={()=> toggle(3)}>
                            <h1>Experience</h1>
                            <div className={selected === 3 ? 'contentShow' : 'content'}> 
                            hello to all
                        </div>
                        </div>
                    </div>
                </div>
         
    );
}

export default Resume;