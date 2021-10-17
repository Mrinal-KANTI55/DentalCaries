import React from 'react';
import Fackdata from '../Hooks/Fackdata';
import Service from './Service/Service';

const Services = () => {
    const [service]=Fackdata();
    return (
        <div>
            <h4>this is services</h4>
            {
               service.map(service=><Service service={service}
               key={service._id}></Service>) 
            }
        </div>
    );
};

export default Services;