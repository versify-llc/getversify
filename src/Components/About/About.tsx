import React, { Fragment, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './About.css';

//Return correct order of picture and text based on screen size (mobile vs desktop)
const AlyssaAbout = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    //Listens for window resize
    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="row justify-content-center top-margin" id="alyssa-profile">
            {dimensions.width < 768 ?
                <Fragment>
                    <div className="col-lg-3 col-md-4 text-center" style={{ height: "auto" }}>
                        <img className="profile-img" src="/images/alyssa.jpg" alt="Alyssa" />
                    </div>
                    <div className="col-md-1"></div>
                </Fragment>
                :
                null
            }
            <div className="col-md-5 about-header-align small-pad">
                <p className="text-body-md pt-3">
                    <b>
                        Alyssa Tarkowski
                    </b>
                </p>
                <p className="text-body-sm" style={{ color: "#8f8f8f" }}>
                    Alyssa is the co-founder and COO of Versify.
                    She recently graduated from Ferris State University with a degree in Computer Information Systems,
                    and she currently works as a data engineer at State Farm.
                    Her favorite sport right now is pickleball,
                    and she's read more books by Puritan authors than most people her age.
                </p>

            </div>
            {dimensions.width >= 768 ?
                <Fragment>
                    <div className="col-md-1"></div>
                    <div className="col-lg-3 col-md-4 text-center m-0" style={{ height: "auto", width: "auto" }}>
                        <img className="profile-img" src="/images/alyssa.jpg" alt="Alyssa" />
                    </div>
                </Fragment>
                :
                null
            }

        </div>
    );
}

const About = () => {
    return (
        <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
            <Navbar backgroundClass="transparent-blur" />
            <div className="container page-top-margin">
                <div className="row justify-content-center pt-5">
                    <div className="col-md-3" style={{ height: "auto" }}>
                        <div className="about-header-align">
                            <h1 className="text-header-sm">MEET</h1>
                            <h1 className="text-header" style={{ color: "#7FDCA5" }}>Versify.</h1>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 about-header-align small-pad">
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
                            Our inspiration comes from Proverbs 3:1-2,
                            which calls God's people keep His Word in their hearts.
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
                    <h1 className="text-header-xl white-text">125,000+</h1>
                    <p className="text-header-sm white-text">Downloads</p>
                </div>
                <br />
                <div className="row justify-content-center small-pad">
                    <div className="col-md-3">
                        <h1 className="text-header white-text">175,000+</h1>
                        <p className="text-header-sm white-text">Verses Memorized</p>
                    </div>
                    <div className="col-md-3">
                        <h1 className="text-header white-text">5,000,000+</h1>
                        <p className="text-header-sm white-text">Games Played</p>
                    </div>

                </div>
            </div>

            <div style={{ width: "100%" }}>
                <img src="/images/green_triangle.png" alt="divider" className="triangle" />
                <div className="container profile-top-margin">
                    <div className="row justify-content-center top-margin">
                        <div className="col-md-4" style={{ height: "auto" }}>
                            <div className="about-header-align">
                                <h1 className="text-header-sm">MEET</h1>
                                <h1 className="text-header" style={{ color: "#7FDCA5" }}>The Team.</h1>
                            </div>
                        </div>
                        <div className="col-md-5 about-header-align small-pad">
                            <p className="text-body-md">
                                <b>
                                    Versify was created by two college students who have a passion for software development
                                    and sharing God's Word with others.
                                </b>
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center top-margin">
                        <div className="col-lg-3 col-md-4 text-center" style={{ height: "auto" }}>
                            <img className="profile-img" src="/images/richie.jpg" alt="Richie" />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5 about-header-align small-pad">
                            <p className="text-body-md pt-3">
                                <b>
                                    Richie Tarkowski
                                </b>
                            </p>
                            <p className="text-body-sm" style={{ color: "#8f8f8f" }}>
                                Richie is the co-founder and CEO of Versify. He graduated from
                                Ferris State University three years ago with a degree in Computer Information Systems,
                                and he currently works as a software engineer at Hagerty.
                                He plays lots of volleyball with his friends
                                and is involved with the college ministry at his church.
                            </p>
                        </div>
                    </div>
                    <br className="break" />
                    <AlyssaAbout />
                </div>
            </div>
            <div className="py-1"></div>
            <Footer />
        </div>
    );
}

export default About;