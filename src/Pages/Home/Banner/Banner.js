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
                <Carousel.Item>
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
        </div>
    );
};

export default Banner;