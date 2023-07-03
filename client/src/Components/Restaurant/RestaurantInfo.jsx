import React from 'react';
import classNames from 'classnames';
import { AiFillStar } from "react-icons/ai";

const RestaurantInfo = () => {
    const diningReview = 0;
    const deliveryReview = 2;
    return (
        <>
            <section className='Reastaurant Info w-full h-auto flex flex-row justify-center'>
                <section className='Restaurant-Name Dining-Review Delivery-Review w-4/5 m-2'>
                    <div className="container flex flex-row justify-between items-center">
                        <div className="restaurantName text-5xl h-auto"><h1 className='px-2'>NOTO - Healthy Ice Cream</h1></div>
                        <div className='reviewContainer flex flex-row items-center center gap-4'>
                            <div className="diningStar pt-2 ">
                                <div className={classNames('bg-gray-500 top-2 rounded-lg flex flex-row', { 'bg-green-800': diningReview > 0 })}>
                                    <h1 className=' pl-2 text-white font-medium text-lg'>{diningReview}</h1>
                                    <div className="px-1 relative h-8 top-1 pt-1"><span className=''><AiFillStar color='white' height={''} /></span></div>
                                </div>
                            </div>
                            <div className="diningReview bg-white"><div className='h-auto w-auto  text-left align-middle rounded text-md'>
                                <h1 className='font-medium '>0</h1>
                                <h1>Dining Reviews</h1>
                                <hr style={{ border: '1px dotted black' }} />
                            </div>
                            </div>
                            <div className="deliveryStar pt-2 pl-5">
                                <div className={classNames('bg-gray-100 top-2 rounded-lg flex flex-row', { 'bg-green-800': deliveryReview > 0 })}>
                                    <h1 className=' pl-2 text-white font-medium text-lg'>{deliveryReview}</h1>
                                    <div className="px-1 relative h-8 top-1 pt-1"><span className=''><AiFillStar color='white' height={''} /></span></div>
                                </div>
                            </div>
                            <div className="deliveryReview "><div className='h-auto w-auto  text-left align-middle rounded text-md'>
                                <h1 className='font-medium '>0</h1>
                                <h1>Delivery Reviews</h1>
                                <hr style={{ border: '1px dotted black' }} />
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default RestaurantInfo