import React from "react";
import './About.css';

function About() {
    return (
        <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row justify-content-center top-margin">
                    <div className="col-md-3" style={{ height: "auto" }}>
                        <div className="header-align">
                            <h1 className="text-header-sm">MEET</h1>
                            <h1 className="text-header" style={{ color: "#7FDCA5" }}>Versify.</h1>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 header-align small-pad">
                        <p className="text-body-md" style={{ color: "#8f8f8f" }}><i>
                            "My son, do not forget my teaching,
                            but let your heart keep my commandments,
                            for length of days and years of life
                            and peace they will add to you."</i><br />
                            Proverbs 3:1-2
                        </p>
                        <hr className="line-divide" />
                        <p className="text-body-md">
                            Versify is a free app that makes it easy and fun to
                            memorize Bible verses through interactive games.
                            Our inspiration comes from Proverbs 3:1-2.
                            In the Bible we are called to memorize Scripture.
                            We know this can be a daunting task, so Versify is here to help!
                        </p>
                        <br />
                        <p className="text-body-lg">
                            <b>
                                We want to give everyone the opportunity and tools they
                                need to store the Word of God in their heart.
                            </b>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "#7FDCA5", width: "100%" }}>
                <img src="/images/white_triangle.png" alt="divider" className="triangle" />
                <div style={{ marginTop: "50px" }}>
                    <h1 className="text-header-xl white-text">332</h1>
                    <p className="text-header-sm white-text">Downloads</p>
                </div>
                <br />
                <div className="row justify-content-center small-pad">
                    <div className="col-md-3">
                        <h1 className="text-header white-text">121</h1>
                        <p className="text-header-sm white-text">Verses Memorized</p>
                    </div>
                    <div className="col-md-3">
                        <h1 className="text-header white-text">1,796</h1>
                        <p className="text-header-sm white-text">Verses In Progress</p>
                    </div>

                </div>
            </div>

            <div style={{ width: "100%" }}>
                <img src="/images/green_triangle.png" alt="divider" className="triangle" />
                <div className="container profile-top-margin">
                    <div className="row justify-content-center top-margin">
                        <div className="col-md-4" style={{ height: "auto" }}>
                            <div className="header-align">
                                <h1 className="text-header-sm">MEET</h1>
                                <h1 className="text-header" style={{ color: "#7FDCA5" }}>The Team.</h1>
                            </div>
                        </div>
                        <div className="col-md-5 header-align small-pad">
                            <p className="text-body-md">
                                <b>
                                    Versify was created by two college students who have a passion for software development
                                    and sharing God’s Word with others.
                                </b>
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center top-margin">
                        <div className="col-lg-3 col-md-4 text-center" style={{ height: "auto" }}>
                            <img className="profile-img" src="/images/richie.jpg" alt="Richie" />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5 header-align small-pad">
                            <p className="text-body-md">
                                <b>
                                    Richie Tarkowski
                                </b>
                            </p>
                            <p className="text-body-sm" style={{ color: "#8f8f8f" }}>
                                Richie is the lead Software Developer of the Versify app. He recently graduated from
                                Ferris State University with a degree in Computer Information Systems. He works at Hagerty
                                as a Software Engineer on its mobile team. His favorite thing about being a part of the Versify
                                team is working on a project with his sister.
                            </p>
                        </div>
                    </div>
                    <br className="break" />
                    <div className="row justify-content-center top-margin" id="alyssa-profile">
                        <div className="col-md-5 header-align small-pad">
                            <p className="text-body-md">
                                <b>
                                    Alyssa Tarkowski
                                </b>
                            </p>
                            <p className="text-body-sm" style={{ color: "#8f8f8f" }}>
                                Alyssa is the lead UI/UX Designer for the Versify app. She is a sophomore at
                                Ferris State University pursuing a degree in Computer Information Systems.
                                She is also a Software Engineer Intern at State Farm. Her favorite thing about being a
                                part of the Versify team is learning new programming tricks from her older brother.
                            </p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-lg-3 col-md-4 text-center" style={{ height: "auto" }}>
                            <img className="profile-img" src="/images/alyssa.jpg" alt="Alyssa" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;