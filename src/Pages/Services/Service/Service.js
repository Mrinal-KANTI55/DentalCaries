import React from 'react';

const Service = (props) => {
    const{name,picture,price,address,about}=props.service;
    return (
        <div>
            <h3>this is srevice {name}</h3>
            <img src={picture} alt="" />
            <h5>price:{price}</h5>
            <h5>address:{address} </h5>
            <p>{about}</p>
        </div>
    );
};

export default Service;