import React from 'react'
import { useParams } from 'react-router-dom';
const Overview = (props) => {
    const { id } = useParams();
    return (
        <div className=''>Overview</div>
    )
}

export default Overview;