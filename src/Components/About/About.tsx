import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import './About.css';

const AlyssaAbout = () => {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

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
        <div className="flex flex-wrap -mx-3 justify-center about-spacing-top" id="alyssa-profile">
            {dimensions.width < 768 ?
                <>
                    <div className="shrink-0 px-3 w-full md:w-1/4 lg:w-3/12 about-image-col" style={{ height: "auto" }}>
                        <img className="about-profile-img" src="/images/alyssa.jpg" alt="Alyssa" />
                    </div>
                    <div className="shrink-0 px-3 w-full md:w-1/12"></div>
                </>
                :
                null
            }
            <div className="shrink-0 px-3 w-full md:w-5/12 text-center md:text-left about-col-spaced">
                <p className="text-body-md about-profile-name">
                    <b>
                        Alyssa Tarkowski
                    </b>
                </p>
                <p className="text-body-sm text-theme-muted">
                    Alyssa is the co-founder and COO of Versify.
                    She recently graduated from Ferris State University with a degree in Computer Information Systems,
                    and she currently works as a data engineer at State Farm.
                    Her favorite sport right now is pickleball,
                    and she's read more books by Puritan authors than most people her age.
                </p>

            </div>
            {dimensions.width >= 768 ?
                <>
                    <div className="shrink-0 px-3 w-full md:w-1/12"></div>
                    <div className="shrink-0 px-3 w-full md:w-1/4 lg:w-3/12 about-image-col about-image-col--flush" style={{ height: "auto", width: "auto" }}>
                        <img className="about-profile-img" src="/images/alyssa.jpg" alt="Alyssa" />
                    </div>
                </>
                :
                null
            }

        </div>
    );
}

const About = () => {
    return (
        <div className="page-shell about-page">
            <Navbar backgroundClass="nav-bg-light" />
            <div className="container page-top">
                <div className="flex flex-wrap -mx-3 justify-center about-hero-row">
                    <div className="shrink-0 px-3 w-full md:w-3/12" style={{ height: "auto" }}>
                        <div className="text-center md:text-left">
                            <h1 className="text-header-sm">MEET</h1>
                            <h1 className="text-header text-theme-green">Versify.</h1>
                        </div>
                    </div>
                    <div className="shrink-0 px-3 w-full md:w-1/12"></div>
                    <div className="shrink-0 px-3 w-full md:w-5/12 text-center md:text-left about-col-spaced">
                        <p className="text-body-md text-theme-muted"><i>
                            "My son, do not forget my teaching,
                            but let your heart keep my commandments,
                            for length of days and years of life
                            and peace they will add to you."</i><br />
                            Proverbs 3:1-2
                        </p>
                        <hr className="about-divider" />
                        <p className="text-body-md">
                            Versify is a free app that makes it easy and fun to
                            memorize Bible verses through interactive games.
                            Our inspiration comes from Proverbs 3:1-2,
                            which calls God's people to keep His Word in their hearts.
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
            <section className="section-banner section-banner--green">
                <img src="/images/white_triangle.png" alt="divider" className="triangle" />
                <div className="section-banner__inner">
                    <h1 className="text-header-xl text-white">300,000+</h1>
                    <p className="text-header-sm text-white">Downloads</p>
                </div>
                <br />
                <div className="flex flex-wrap -mx-3 justify-center about-section-pad">
                    <div className="shrink-0 px-3 w-full md:w-3/12">
                        <h1 className="text-header text-white">500,000+</h1>
                        <p className="text-header-sm text-white">Verses Memorized</p>
                    </div>
                    <div className="shrink-0 px-3 w-full md:w-3/12">
                        <h1 className="text-header text-white">14,000,000+</h1>
                        <p className="text-header-sm text-white">Games Played</p>
                    </div>

                </div>
            </section>

            <section className="section-banner">
                <img src="/images/green_triangle.png" alt="divider" className="triangle" />
                <div className="container about-profile-section">
                    <div className="flex flex-wrap -mx-3 justify-center about-spacing-top">
                        <div className="shrink-0 px-3 w-full md:w-1/4" style={{ height: "auto" }}>
                            <div className="text-center md:text-left">
                                <h1 className="text-header-sm">MEET</h1>
                                <h1 className="text-header text-theme-green">The Team.</h1>
                            </div>
                        </div>
                        <div className="shrink-0 px-3 w-full md:w-5/12 text-center md:text-left about-col-spaced">
                            <p className="text-body-md">
                                <b>
                                    Versify was created by two college students who have a passion for software development
                                    and sharing God's Word with others.
                                </b>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 justify-center about-spacing-top">
                        <div className="shrink-0 px-3 w-full md:w-1/4 lg:w-3/12 about-image-col" style={{ height: "auto" }}>
                            <img className="about-profile-img" src="/images/richie.jpg" alt="Richie" />
                        </div>
                        <div className="shrink-0 px-3 w-full md:w-1/12"></div>
                        <div className="shrink-0 px-3 w-full md:w-5/12 text-center md:text-left about-col-spaced">
                            <p className="text-body-md about-profile-name">
                                <b>
                                    Richie Tarkowski
                                </b>
                            </p>
                            <p className="text-body-sm text-theme-muted">
                                Richie is the co-founder and CEO of Versify. He graduated from
                                Ferris State University with a degree in Computer Information Systems,
                                and he currently works as a software engineer at Hagerty.
                                Richie and his wife serve in the the college ministry at their church.
                            </p>
                        </div>
                    </div>
                    <br className="about-break" />
                    <AlyssaAbout />
                </div>
            </section>
            <div className="page-gap-footer"></div>
            <Footer />
        </div>
    );
}

export default About;
