import { useParams } from 'react-router';
import data from './FackDentalService.json';

const SelectService = () => {
    const { serviceid } = useParams();
    const Selectservice = data.find(service => service._id === serviceid);
    console.log(Selectservice);
    return (
        <div className='container my-5'>
            <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-md-6 col-sm-12 my-5'>
                <img className='rounded w-100' src={Selectservice.picture} alt="" /></div>
            <div className='col-md-6 col-sm-12 px-3 my-5'>
                <h3> <span className='fs-2 text-danger text-decoration-underline'>{Selectservice.name}</span> : <span className='fs-6 fst-italic'>{Selectservice.about}</span> </h3>
                <h6> <span className='text-danger'>Around cost</span> : $ {Selectservice.price}</h6>
            </div>
        </div>
        </div>
    );
};

export default SelectService;