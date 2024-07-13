import React from 'react';
import classNames from 'classnames';

import { AiFillStar } from "react-icons/ai";
import { RiDirectionLine } from "react-icons/ri";
import { BsBookmarkPlus } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
import { RiShareForwardLine } from "react-icons/ri";
import { IoReloadSharp } from 'react-icons/io5';



const RestaurantInfo = () => {
    const diningReview = 0;
    const deliveryReview = 2;
    const isOpen = true;
    let isBookMarked = true;
    return (
        <>
            <section className='Reastaurant Info w-full h-auto flex flex-row justify-center m-1'>
                <section className='Restaurant-Name Dining-Review Delivery-Review w-4/5 h-full'>
                    <div className="container flex flex-row justify-between items-center">
                        <div className="restaurantName text-4xl h-auto"><h1 className='px-2 font-semibold'>NOTO - Healthy Ice Cream</h1></div>
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

            <section className='Restaurant-Info-Section w-full flex flex-row justify-center '>
                <div className="infoContainer w-4/5 h-auto px-2  font-light">
                    <div className="cuisine text-lg">Pizza, Fast Food</div>
                    <div className="address text-gray-500 text-lg">Connaught Place, New Delhi</div>
                    <div className='status timing my-1 flex flex-row gap-2 text-md'>
                        <div style={{ color: 'rgb(244, 162, 102)' }} >{isOpen ?
                            <span>
                                Open now
                            </span>
                            :
                            <span>
                                Closed now
                            </span>
                        }
                        </div>
                        <span className='text-gray-500'>-</span>
                        <span className='text-gray-500'>10:30am - 11:50pm</span>
                    </div>
                </div>
            </section >

            <section className='button-section my-2 w-full h-auto flex justify-center'>
                <div className="buttonContainer w-4/5 px-2 font-light flex flex-row gap-3">

                    <button className='w-auto h-9 border rounded-md border-gray-400 '>
                        <div className='flex flex-row gap-1 items-center justify-center mx-3'>
                            <div className=" h-auto w-auto"> <div className='w-auto text-md'><RiDirectionLine fill={'#FF7E8B'} /></div></div>
                            <span className=' text-md'> Direction</span>
                        </div>
                    </button>

                    <button className='w-auto h-9 border rounded-md border-gray-400 ' onClick={() => { isBookMarked = 1 - isBookMarked; console.log(isBookMarked) }}>
                        <div className='flex flex-row gap-1 items-center justify-center mx-3'>
                            <div className=" h-auto w-auto"> <div className='w-auto text-md '>{isBookMarked ? <BsBookmarkCheck fill={'#FF7E8B'} className='' /> : <BsBookmarkPlus fill={'#FF7E8B'} />}</div></div>
                            <span className=' text-md'>BookMark </span>
                        </div>
                    </button>

                    <button className='w-auto h-9 border rounded-md border-gray-400'>
                        <div className='flex flex-row gap-1 items-center justify-center mx-3'>
                            <div className=" h-auto w-auto"> <div className='w-auto text-lg'><RiShareForwardLine fill={'#FF7E8B'} /></div></div>
                            <span className=' text-md'> Share </span>
                        </div>
                    </button>
                </div>
            </section>
        </>
    )
}

export default RestaurantInfo