
import React from 'react';
import './AboutPage.css';
import Image1 from "../../Images/about-firstImg.png";
import Image2 from "../../Images/content-img-1.png";
import Image3 from "../../Images/content-img-2.png";
import Image4 from "../../Images/last-image.png";

function About(){
    return(
        <>
            <div className='about-page'>

                {/*Header-text*/}
                <div className='about-header'>
                    <h2>Grace Construction,<br></br>
                        A Legacy of Excellence</h2>
                </div>

                {/*First-Image*/}
                <div className='about-firstImage'>
                    <div className='image-container'>
                        <img src={Image1} alt="about-firstImg"/>
                        <div className='hover-overlay'>
                            <div className='hover-overlay-text'>
                                <h3>A Promise of Excellence</h3>
                                <p>Our team of skilled professionals is dedicated to turning your vision into reality. We take pride in our
                                    meticulous attention to detail and our ability to seamlessly manage each phase of the construction process.
                                    From initial planning to final completion, we guarantee a smooth and efficient experience,
                                    ensuring that your project is built to last.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/*image with text 01*/}
                <div className='about-content-section-1'>
                    <div className='text-content-1'>
                        <p>
                            Grace Construction has been a beacon of quality and reliability in the construction industry.
                            Our extensive portfolio boasts numerous successfully completed projects, all delivered on time
                            and with impeccable precision. Our unwavering commitment to excellence ensures that every project,
                            regardless of size or complexity, meets the highest standards of craftsmanship and innovation.
                        </p>
                    </div>

                    <div className='img-content-1'>
                        <div className='image-container'>
                            <img src={Image2} alt="img-1"/>
                            <div className='hover-overlay'>
                                <div className='hover-overlay-text'>
                                    <h3>Discover the Excellence</h3>
                                    <p>
                                        Experience the difference that true dedication and expertise can make, and let us bring your vision to life
                                        with precision, integrity, and unmatched craftsmanship.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*image with text 02*/}
                <div className='about-content-section-2'>
                    <div className='img-content-2'>
                        <div className='image-container'>
                            <img src={Image3} alt="img-2"/>
                            <div className='hover-overlay'>
                                <div className='hover-overlay-text'>
                                    <h3>Experience the Excellence</h3>
                                    <p>Experience the excellence of our construction services, where quality, innovation, and
                                        customer satisfaction are our top priorities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='text-content-2'>
                        <p>
                            We believe in building more than just structures; we build relationships. Our clients trust us to
                            deliver exceptional results, and we take that trust seriously. We prioritize open communication and collaboration,
                            ensuring that your needs and expectations are not only met but exceeded. Our commitment to customer satisfaction
                            is at the heart of everything we do, driving us to constantly innovate and improve.
                        </p>
                    </div>
                </div>

                {/*last-image*/}
                <div className='last-image'>
                    <div className='image-container'>
                        <img src={Image4} alt="last-img"/>
                        <div className='hover-overlay'>
                            <div className='hover-overlay-text'>
                                <h3>A History of Excellence.</h3>
                                <p>
                                    At our Grace construction, we pride ourselves on a history of excellence. For years, we have been committed
                                    to delivering top-notch service, innovative designs, and superior craftsmanship in every project.
                                    Our dedicated team of professionals ensures that every detail is meticulously handled, from initial planning
                                    to final execution.
                                </p>
                                <p>
                                    We prioritise quality, safety, and sustainability, consistently exceeding client expectations.
                                    Our reputation is built on trust, reliability, and a steadfast commitment to excellence.
                                    Whether it's residential, commercial, or industrial construction, we bring our best to every endeavour, creating structures that stand the test of time and relationships that last even longer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default About;