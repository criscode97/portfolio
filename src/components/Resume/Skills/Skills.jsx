import "./skills.scss";

function Skills() {
    return (
        <div className="containerSkills">
            <div className="category">
                <div className="wrapper">
                <div className="categorytitle">Back End</div>
                <hr></hr>
                <div className="iconWrapper">
                <div className="imgicon">
                    <img src="assets/icons/pythonicon.png" width = "35px" height = "35px" />
                </div>
                <div className="imgicon">
                    <img src="assets/icons/airflow_transparent.png" width = "35px" height = "35px" />
                </div>
                <div className="imgicon">
                    <img src="assets/icons/Apache_Spark_logo.svg.png"  width = "55px" height = "30px" />
                </div>
                <div className="imgicon">
                    <img src="assets/icons/flaskicon.png" width = "35px" height = "35px"/>
                </div>
                <div className="imgicon">
                    <img src="assets/icons/sqliteicon.png" width = "35px" height = "35px"/>
                </div>
                <div className="imgicon">
                    <img src="assets/icons/djangoicon.png" width = "35px" height = "35px" />
                </div>
                <div className="imgicon">
                    <img src="assets/icons/postgresqlicon.png" width = "35px" height = "35px" />
                </div>
                <div className="imgicon">
                    <img src="assets/icons/djangoresticon.png" width = "55px" height = "30px" />
                </div>
                </div>
            </div>
        </div>
            <div className="category">
                <div className="wrapper">
                    <div className="categorytitle">Front End</div>
                    <hr></hr>
                    <div className="iconWrapper">
                        <div className="imgicon">
                            <img src="assets/icons/bootstrapicon.png" width = "35px" height = "35px" />
                        </div>
                        <div className="imgicon">
                            <img src="assets/icons/javascripticon.png" width = "35px" height = "35px" />
                        </div>
                        <div className="imgicon">
                            <img src="assets/icons/cssicon.png" width = "35px" height = "35px" />
                        </div>
                        <div className="imgicon">
                            <img src="assets/icons/htmlicon.png" width = "35px" height = "35px" />
                        </div>
                        <div className="imgicon">
                            <img src="assets/icons/reacticon.png" width = "35px" height = "35px" />
                        </div>
                        <div className="imgicon">
                            <img src="assets/icons/sassicon.png" width = "35px" height = "35px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="category">
                <div className="wrapper">
                    <div className="categorytitle">Others</div>
                    <hr></hr>
                    <div className="iconWrapper">
                    <div className="imgicon">
                            <img src="assets/icons/awsicon.png" width = "35px" height = "35px" />
                        </div>
                        <div className="imgicon">
                            <img src="assets/icons/giticon.png" width = "35px" height = "35px" />
                        </div>
                        <div className="imgicon">
                            <img src="assets/icons/githubicon.png" width = "35px" height = "35px" />
                        </div>
                        
                        
                        <div className="imgicon">
                            <img src="assets/icons/pandasicon.png" width = "35px" height = "35px" />
                        </div>
                        <div className="imgicon">
                            <img src="assets/icons/plotlyicon.png" width = "35px" height = "35px" />
                        </div>
                        <div className="imgicon">
                            <img src="assets/icons/ubuntoicon.png" width = "35px" height = "35px" />
                        </div>
                        <div className="imgicon">
                            <img src="assets/icons/numpyicon.png" width = "70px" height = "25px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;