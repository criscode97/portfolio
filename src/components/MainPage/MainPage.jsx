import "./mainpage.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

function MainPage() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            loop: false,
            backSpeed: 80,
            backDelay: 1500,
            disableBackTyping: true,
            strings: ["Hello, World!"]
        });
    }, []);

    return (
        <section id='mainpage'>
            <div className="mainpage">
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/me.png" alt="Profile" />
                    </div>
                </div>
                <div className="right">
                    <h1 ref={textRef}></h1>
                    <h2>
                        I'm Cris,<br />
                        A Data Engineer.
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default MainPage;
