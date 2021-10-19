import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/2FJvLMJ/cover1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Dental X-Rays</h3>
                        <p>images of your teeth that your dentist uses to evaluate your oral health. These X-rays are used with low levels of radiation to capture images of the interior of your teeth and gums. This can help your dentist to identify problems, like cavities, tooth decay, and impacted teeth.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Th16BJW/cover2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Doctor Consultation</h3>
                        <p>The department provides consultation services in level-4 (OPD) through highly qualified and experienced Consultants, who carefully evaluate each patient. After diagnosing the patient’s condition, our Consultants discuss available treatment options and recommend the most effective treatment.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={400}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/thZHXHy/cover3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Surgery</h3>
                        <p>Many times, when a dentist mentions dental surgery it is met with widespread panic and fear from their patients.  The idea is that dental surgery is a painful and expensive procedure.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            < div className='container my-5' >
                <h2>Dental Advice</h2>
                < div className='row d-flex justify-content-center align-items-center' >
                    <div className='col-md-6 col-sm-12 px-3 my-5'>
                        <h3> <span className='fs-2 text-danger text-decoration-underline'>Regular Checkups</span> : <span className='fs-6 fst-italic'>We encourage regular checkups for individuals age four and up. Most people find that it is valuable to have a checkup at least every six months, so our dentist can:

                            Check for problems that you might not see or feel
                            Find early signs of decay
                            Treat oral health problems early, while they are still manageable
                            Regular checkups include a thorough cleaning, polishing, and an oral exam by the doctor. During the oral exam, our dentist checks the health of your mouth, teeth, gums, cheeks, and tongue. At each visit, our dentist also checks old fillings and restorations because constant pressure from chewing, grinding, or clenching can cause them to wear away, chip, or crack.</span> </h3>
                    </div>
                    <div className='col-md-6 col-sm-12 my-5'>
                    <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/y0Yfd2Y/card1.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/nkvsTfK/card3.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
                        </div>
                </div >
            </div >

        </div>
    );
};

export default Banner;