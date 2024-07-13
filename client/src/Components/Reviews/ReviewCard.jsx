import React from 'react';
import { IoIosStar } from "react-icons/io";
import dayjs from 'dayjs';
import { StrictMode } from 'react';




const ReviewCard = (props) => {
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)


    return (
        <div className="pt-4 px-2">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2 items-center">
                    <div className='h-auto'>
                        <img src="https://th.bing.com/th/id/OIP.AiUsnzFoaQVt7VM68DC4ggHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='h-12 rounded-full' />
                    </div>
                    <div className='h-full flex flex-col justify-between'>
                        <span className='text-lg  align-middle font-medium'>{props.userName}</span>
                        <span className='font-normal text-sm text-gray-500'> 425 reviews &#9679; 1946 Followers</span>
                    </div>
                </div>

                <div className="w-24 h-10 border border-red-400 rounded-md flex items-center justify-center cursor-pointer text-red-400 text-lg">Follow </div>
            </div>

            <div className="flex flex-row gap-2 pt-5 items-end">
                <div className="h-6 w-auto bg-lime-600 flex items-center justify-center rounded-md p-2 gap-px py-1">
                    <div className=" text-white font-semibold">{props.star}</div>
                    <div className='relative '><IoIosStar fill='white' /></div>
                </div>

                {props.isDelhivery ?
                    <div className="text-md font-thin" style={{ fontFamily: 'Okra, Helvetica, sans-serif;' }}>Delivery</div>
                    :
                    <div className="text-md font-thin" style={{ fontFamily: 'Okra, Helvetica, sans-serif;' }}>Dining</div>
                }

                <div className='text-base text-gray-500'>
                    {dayjs().to(dayjs(props.date))}
                </div>

            </div>

            <div className="text-lg text-gray-500 font-light pt-3">
                {props.review}
                {props.image &&
                    <div>
                        <img src="" alt="image" />
                    </div>
                }
            </div>

            <div className="text-base text-gray-500 font-light pt-3">
                {props.votes} for helpful, {props.comments} Comments
            </div>

            <div className=" text-base font-medium text-gray-500  flex flex-row gap-7 py-3">
                <div className='cursor-default'>Helpful</div>
                <div className='cursor-default'>Comment</div>
                <div className='cursor-default'>Share</div>
            </div>
            <hr />
        </div >
    )
}

export default ReviewCard;