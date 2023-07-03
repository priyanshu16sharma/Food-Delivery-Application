import React from 'react';
import Overview from './Overview';
import { AiTwotoneStar } from "react-icons/ai";
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';
const RestaurantCard = (props) => {
    return (
        <>
            <Link to={`/restaurant/${props.id}/overview`}>
                <div className='h-80 w-full mb-8 mt-2 flex flex-col flex-nowrap hover:border hover:rounded-xl items-center hover:shadow-2xl' style={{ width: '90%' }}>
                    <div className="h-56  mt-3 border rounded-2xl " style={{ width: '94%' }}> <img src={props.image} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover', border: '1px', borderRadius: '1rem' }} /></div>
                    <div className="h-16 my-2 flex flex-col w-11/12">
                        <div className="h-1/2 w-full flex flex-row justify-between items-center">
                            <div className="h-7 m-1 w-64 font-sm text-xl align-middle truncate" style={{ fontWeight: '490' }}>{props.restaurantName}</div>
                            <div className="h-6 rounded w-auto m-1 px-1 bg-lime-800 text-center align-middle flex flex-row justify-center items-center" style={{ color: 'aliceblue' }}><span className='px-0' style={{ fontWeight: '400' }}>{props.rating}</span><div className='h-5/6 pb-1 flex flex-row items items-end' style={{ width: '13px' }}><IoIosStar style={{ color: 'aliceblue' }} size={'10px'} /></div>
                            </div>
                        </div>
                        <div className="h-1/2 w-full flex flex-row justify-between items-center">
                            <div className="h-7 m-1 w-56 font-sm text-md align-middle truncate" style={{ fontWeight: '490' }}>{props.cuisine.join(", ")}</div>
                            <div className="h-7  w-auto  text-center align-middle text-sm" >{props.cost}</div>
                        </div>
                    </div>
                </div >
            </Link>
        </>
    )
}

export default RestaurantCard