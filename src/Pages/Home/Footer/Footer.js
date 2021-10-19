import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee , faEyeDropper,faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faEyeDropper} />
    const Twitter = <FontAwesomeIcon icon={faEye} />
    const Google = <FontAwesomeIcon icon={faEyeSlash} />
    const Instagram = <FontAwesomeIcon icon={faCoffee} />
    const LinkedinIn = <FontAwesomeIcon icon={faCoffee} />
    const Github = <FontAwesomeIcon icon={faCoffee} />

    return (
        <div>
            <div className="">
                <footer
                    className="text-center text-lg-start text-white"
                    style={{ backgroundColor: '#929fba' }}
                >
                    <div className="container p-4 pb-0">
                        <section >
                            <div className="row">
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">
                                    Dental Caries
                                    </h6>
                                    <p>
                                    images of your teeth that your dentist uses to evaluate your oral health. These X-rays are used with low levels of radiation to capture images of the interior of your teeth and gums. This can help your dentist to identify problems, like cavities, tooth decay, and impacted teeth
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
                                    <p>
                                        <Link to='#' className="text-decoration-none text-white">Fluoride treatments</Link>
                                    </p>
                                    <p>
                                        <Link to='#' className="text-decoration-none text-white">Fillings</Link>
                                    </p>
                                    <p>
                                        <Link to='#' className="text-decoration-none text-white">Crowns</Link>
                                    </p>
                                    <p>
                                        <Link to='#' className="text-decoration-none text-white">Root canals</Link>
                                    </p>
                                </div>

                                <hr className="w-100 clearfix d-md-none" />


                                <hr className="w-100 clearfix d-md-none" />

                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                    <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>

                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                    <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>


                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: "#3b5998" }}
                                        to="#!"
                                        
                                    >{facebook}
                                    </Link>


                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: '#55acee' }}
                                        to="#!"
                                      
                                    >{Twitter}</Link>


                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: '#dd4b39' }}
                                        to="#!"
                                        
                                    >{Google}</Link>


                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: '#ac2bac' }}
                                        to="#!"
                                        
                                    >{Instagram}</Link>

                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: '#0082ca' }}
                                        to="#!"
                                       
                                    >{LinkedinIn}</Link>

                                    <Link
                                        className="btn btn-primary btn-floating m-1"
                                        style={{ backgroundColor: '#333333' }}
                                        to="#!"
                                       
                                    >{Github}</Link>
                                </div>
                            </div>

                        </section>

                    </div>
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2020 Copyright:
                        <Link className="text-decoration-none text-white" to="https://mdbootstrap.com/"
                        >DENTAL-CARIES.com</Link>
                    </div>

                </footer>

            </div>

        </div>
    );
};

export default Footer;