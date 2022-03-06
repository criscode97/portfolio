import "./education.scss";

function Education() {
    return(
        <div className="education">
                <div className="college">
                    <div className="title">College</div>
                    <hr></hr>
                        <ul>
                            <li>
                            <div className="heading"> Bachelor of Computer Science</div>
                            Hunter College  (2023)
                            </li>
                            <li>
                            <div className="heading"> G.E.D.</div>
                            Pathways to Graduation 
                            at City (2018)
                            </li>
                        </ul>
                </div>
                <div className="selfTaught">
                    <div className="title">Self-Taught Coursework</div>
                    <hr></hr>
                    <div className="courseWrapper">
                    <div className="leftWrapper">
                        <ul>
                            <li><a 
                            href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0" 
                            target="_blank">
                                Harvard’s CS50.
                                </a>
                                </li>
                            <li>
                                <a href="https://cs50.harvard.edu/web/2020/"
                                    target="_blank">
                                    CS50's Web Programming.
                                </a>
                            </li>
                            <li> 
                                <a href="https://www.udemy.com/course/aws-certified-developer-associate-dva-c01/" 
                                    target="_blank">
                                    AWS certified developer by Stephane Maarek.
                                </a>
                            </li>
                            <li>
                                <a href="https://www.udemy.com/course/django-3-make-websites-with-python-tutorial-beginner-learn-bootstrap/"
                                    target="_blank">
                                Django 3 by Nick Walter.
                                </a>
                            </li>
                            <li>
                                <a href="https://www.udemy.com/course/the-modern-python3-bootcamp/learn/lecture/7991082?start=0#content"
                                    target="_blank">
                                    Python 3 by Cole Steele.
                                </a>
                                </li>
                            <li>
                                <a href="https://www.udemy.com/course/the-python-bible/"
                                target="_blank">
                                Python Bible by Ziyad Yehia.
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="rightWrapper">
                        <ul>
                        <li><a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                        target="_blank">
                            React by Maximilian Schwarzmüller.</a></li>
                        <li><a href="https://www.udemy.com/course/the-complete-sql-bootcamp/"
                         target="_blank">
                            SQL bootcamp by Jose Portilla.</a></li>
                        <li><a href="https://www.udemy.com/course/the-complete-javascript-course/"
                        target="_blank">
                            Javascript by Jonas Schmedtmann.</a></li>
                        <li><a href="https://www.udemy.com/course/modern-html-css-from-the-beginning/learn/lecture/13285074?start=0#content"
                        target="_blank">HTML, CSS, Sass by Brad Traversy.</a></li>
                        </ul>
                    </div>

                    </div>
                </div>
        </div>

    );
}

export default Education;