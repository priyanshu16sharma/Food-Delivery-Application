import React from 'react'
import HomePageLayout from '../Layout/HomePage.Layout';
import { useParams } from 'react-router-dom';
import Delivery from '../Components/Delivery';
import Dining from '../Components/Dining';
import Nutrition from '../Components/Nutrition';
const HomePage = () => {
    const { type } = useParams();
    return (
        <>
            {type === 'delivery' && <Delivery />}
            {type === 'dineout' && <Dining />}
            {type === 'nutrition' && <Nutrition />}
        </>
    )
}

export default HomePageLayout(HomePage);