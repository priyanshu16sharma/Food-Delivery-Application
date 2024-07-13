import React from 'react';
import ReactStars from "react-rating-stars-component";

const FoodItems = (props) => {
    return (
        <>
            <div className=' md:h-36 min-h-32 w-auto flex flex-row gap-5 overflow-hidden'>
                <div className="h-full w-1/3 md:w-36 border rounded-lg">
                    <img src="https://b.zmtcdn.com/data/dish_photos/4c8/b3009a76645f4a02296ff8d404b464c8.jpg?" alt="" style={{ objectFit: 'cover' }} className='h-full w-full border rounded-lg' />
                </div>
                <div className='flex flex-col w-2/3 gap-0 h-full'>
                    <h5 className='md:text-2xl text-xl font-normal h-auto '>{props.foodName}</h5>
                    <h6 className=''>
                        <ReactStars
                            count={5}
                            size={24}
                            edit={false}
                            value={props.rating}
                            activeColor="#ffd700"
                        />
                    </h6>
                    <h6 className='text-lg text-gray-500'>₹{props.price}</h6>
                    <div className="">
                        <h6 className='text-normal text-gray-500 md:truncate line-clamp-2'>{props.description}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodItems;