import { useEffect, useState } from 'react';

const Fackdata = () => {
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch('./FackDental.json')
        .then(response=>response.json())
        .then(data=>setService(data));

    },[])

    return [service,setService];
};

export default Fackdata;