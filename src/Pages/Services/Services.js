import { Row } from 'react-bootstrap';
import Fackdata from '../../Hooks/Fackdata';
import Service from './Service/Service';

const Services = () => {
    const service = Fackdata();

    return (
        <div className='container my-5'>
            <h4>this is services</h4>
            <Row xs={1} md={2} lg={3} className="g-2">
            {
                service.map(service => <Service service={service}
                    key={service._id}></Service>)
            }
            </Row>
            
        </div>
    );
};

export default Services;