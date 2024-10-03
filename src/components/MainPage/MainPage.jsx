import "./mainpage.scss";
import { init } from 'ityped';
import { useEffect, useRef, useState } from 'react';

function MainPage() {
    const textRef = useRef(); // For ityped animation
    const phrases = ["A Data Engineer", "An AWS Developer", "A Full Stack Developer"];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
  
    // Initialize ityped for the first greeting text
    useEffect(() => {
      init(textRef.current, {
        showCursor: false,
        loop: false,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
        strings: ["Hello, World!"], // Replace with any greeting you prefer
      });
    }, []);
  
    // Manage transitions between phrases
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true); // Start animation

            setTimeout(() => {
                // Move to the next phrase
                setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
                setIsAnimating(false); // End animation
            }, 800); // Matches the animation duration

        }, 4000); // Adjust timing for each phrase display

        return () => clearInterval(interval);
    }, [phrases.length]);
  




    return (
        <section id='mainpage'>
            <div className="mainpage">
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/me.png" alt="Profile" />
                    </div>
                </div>
                <div className="right">
                    <h1 ref={textRef}></h1> {/* Animated "Hello, World!" or any greeting */}
                    <div className="bottom">
                    <h2>
                        I'm Cris,
                        <span className="text-wrapper">
                            <span className={`current ${isAnimating ? 'animate-out' : 'animate-in'}`}>
                                <strong>{phrases[currentIndex]}</strong>
                            </span>
                        </span>
                    </h2>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MainPage;