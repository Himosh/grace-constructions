import React, { useState } from 'react';
import './landingPage.css';

export const LandingPage = () => {
    const images = [
        '/assets/showcase-buildingg1.jpg',
        '/assets/showcase-buildingg2.jpg',
        '/assets/showcase-buildingg3.jpg',
        '/assets/showcase-buildingg4.jpg',
        '/assets/showcase-buildingg5.jpg',
        '/assets/showcase-buildingg6.jpg',
        '/assets/showcase-buildingg7.jpg',
        '/assets/showcase-buildingg8.jpg',
        '/assets/showcase-buildingg9.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 4 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 4 ? 0 : prevIndex + 1));
    };

    return (
        <div className='landing-page'>
            <div className="hero-section">
                <div className="hero-section-head">
                    Building Dreams, Creating Realities
                </div>
                <div className="hero-section-para">
                    At Grace Building Construction, we don't just construct buildings, we create the foundations for your dreams. With a commitment to excellence and a passion for precision, we transform visions into architectural masterpieces. Our team of dedicated professionals ensures every project, big or small, is built with integrity, innovation, and unparalleled craftsmanship. Trust us to turn your dreams into reality, one brick at a time.
                </div>
                <div className="hero-section-img">
                    <img src="/assets/hero-section-img.png" alt="Hero" />
                </div>
            </div>

            <div className="service-section">
                <div className="service-section-head">
                    What Services, We Give You!
                </div>
                <div className="service-box-section">
                    <div className="service-box">
                        <div className="service-box-icon">
                            <img src="/assets/new-building-img.png" alt="New Building" />
                        </div>
                        <div className="service-box-head">
                            New Building Construction
                        </div>
                        <div className="service-box-para">
                            Bring your dream to life. We specialize in constructing high-quality residential, commercial, and industrial spaces.
                        </div>
                    </div>

                    <div className="service-box">
                        <div className="service-box-icon">
                            <img src="/assets/design-build-img.png" alt="Design and Build" />
                        </div>
                        <div className="service-box-head">
                            Design and Building
                        </div>
                        <div className="service-box-para">
                            We provide Design and Building services, combining innovative design with expert construction to deliver quality results.
                        </div>
                    </div>

                    <div className="service-box">
                        <div className="service-box-icon">
                            <img src="/assets/renovation-img.png" alt="Renovation" />
                        </div>
                        <div className="service-box-head">
                            Renovation & Remodeling
                        </div>
                        <div className="service-box-para">
                            Revitalize your space with our expert renovation services. We transform your interiors to reflect your vision and style.
                        </div>
                    </div>
                </div>
            </div>

            <div className="work-showcase">
                <div className="work-showcase-head">
                    Showcase of Our Work
                </div>
                <div className="work-showcase-para">
                    Take a visual tour through our gallery and witness the craftsmanship and dedication that define Grace Building Construction. From stunning residential spaces to impressive commercial projects, see firsthand the quality and attention to detail we bring to every project.
                </div>
                <div className="slider-container">
                    <button className="slider-button slider-button-left" onClick={handlePrev}>
                        &lt;
                    </button>
                    <div className="building-images">
                        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Showcase ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button className="slider-button slider-button-right" onClick={handleNext}>
                        &gt;
                    </button>
                </div>
            </div>

            <div className="project-section">
                {/* Add project section content here */}
            </div>
        </div>
    );
}

export default LandingPage;
