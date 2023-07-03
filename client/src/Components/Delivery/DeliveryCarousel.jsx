import React, { useState } from 'react'
import DeliveryCategoryCard from './DeliveryCategoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import "./customNavigation.largeCategoryCard.css"
// import required modules
import { Pagination, Navigation } from "swiper";


const DeliveryCarousel = () => {

    const [deliverCategory] = useState([
        {
            'image': 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
            'category': 'Pizza',
        },
        {
            'image': 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png',
            'category': 'Burger',
        },
        {
            'image': 'https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png',
            'category': 'Biryani',
        },
        {
            'image': 'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
            'category': 'Chicken',
        },
        {
            'image': 'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png',
            'category': 'Sandwich',
        },
        {
            'image': 'https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png',
            'category': 'Noodles',
        },
        {
            'image': 'https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png',
            'category': 'Rolls',
        },
        {
            'image': 'https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png',
            'category': 'Thali',
        },
    ])

    return (
        <>
            <div className='h-80 w-full bg-gray-100 flex flex-col justify-center items-center'>
                <div className='w-4/5'>
                    <div className='p-2 text-3xl mt-4' style={{ fontWeight: '450' }}>Inspiration for your first order</div>
                    <div>
                        <div className='lg:hidden grid grid-cols-4 md:grid-cols-4 h-auto w-full justify-items-center p-1'>
                            {deliverCategory.map((food) => {
                                return <DeliveryCategoryCard {...food} />
                            })}
                        </div>
                        <div className='lg:flex  hidden h-auto'>
                            <Swiper spaceBetween={0}
                                slidesPerView={6}
                                navigation={true}
                                modules={[Navigation, Pagination]}
                                className='mySwiper'
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                {deliverCategory.map((food) => {
                                    return (<SwiperSlide ><div className='h-full w-full flex justify-center items-center'><DeliveryCategoryCard {...food} /></div></SwiperSlide>)
                                })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeliveryCarousel