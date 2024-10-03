import "./aboutme.scss";

function AboutMe() {
    const birthYear = 1997;
    const birthMonth = 2; // February is the 2nd month
    const today = new Date();
    const age = today.getFullYear() - birthYear - (today.getMonth() + 1 < birthMonth ? 1 : 0); // Adjust if birthday hasn't occurred yet this year

    return (
        <section id="aboutme">
            <div className="aboutme">
                <div className="textcontainer">
                    <h2>
                        I am a {age}-year-old developer based in NYC, currently pursuing a degree in Computer Science at Hunter College. I’m the type of person who loves learning new things.
                        <br />
                        <br />
                        I am interested in full-stack development, cloud architecture, data visualization, and A.I.
                    </h2>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
