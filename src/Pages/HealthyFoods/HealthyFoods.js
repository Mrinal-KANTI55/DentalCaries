import React from 'react';
import HealthyFood from './HealthyFood/HealthyFood';
import foods from './HealtyFood.json';

const HealthyFoods = () => {
    console.log(foods);
    return (
        <div>
            {
                foods.map(food => 
                    <HealthyFood key={food._id}
                    food={food}></HealthyFood>
                )
            }
        </div>
    );
};

export default HealthyFoods;