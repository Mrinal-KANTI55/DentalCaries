import React from 'react';

const HealthyFood = (props) => {
    const { picture, name, about } = props.food;
    return (
        < div className = 'container my-5' >
            < div className='row d-flex justify-content-center align-items-center' >
                <div className='col-md-6 col-sm-12 my-5'>
                    <img className='rounded w-100' src={picture} alt="" /></div>
                <div className='col-md-6 col-sm-12 px-3 my-5'>
                    <h3> <span className='fs-2 text-danger text-decoration-underline'>{name}</span> : <span className='fs-6 fst-italic'>{about}</span> </h3>
                </div>
            </div >
        </div >
    );
};

export default HealthyFood;