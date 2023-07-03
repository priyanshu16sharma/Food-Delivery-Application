import React, { useState } from 'react';
import DiningCarouselCard from './DiningCarouselCard';
// import required modules

import { Swiper, SwiperSlide } from "swiper/react";


import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
//Swiper.use([Navigation]);
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import '../Delivery/customNavigation.largeCategoryCard.css'

const DiningCarousel = () => {
    const slideConfig = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
        modules: [Navigation],
        className: "mySwiper",
        navigation: true,

    };
    const config = {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1122: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1400: {
                slidesPerView: 4,
                spaceBetween: 25,
            }
        },
        modules: [Navigation, Mousewheel, Keyboard],
        className: "mySwiper",
        navigation: true,
        mousewheel: true,
        keyboard: true,
    }

    const [restaurant] = useState([{
        image: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
        caption: '9 Unique Dining Experience',
        placeCount: '9 Places',
    }, {
        image: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
        caption: '13 Best Korean Restaurants',
        placeCount: '13 Places',
    }, {
        image: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
        caption: '21 Best Insta-worthy Places',
        placeCount: '21 Places',
    }, {
        image: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
        caption: '13 Best Korean Restaurants',
        placeCount: '13 Places',
    }, {
        image: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
        caption: '10 Celeb-loved Places',
        placeCount: '10 Places',
    }, {
        image: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
        caption: '9 Unique Dining Experience',
        placeCount: '9 Places',
    }, {
        image: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
        caption: '13 Best Korean Restaurants',
        placeCount: '13 Places',
    }, {
        image: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
        caption: '21 Best Insta-worthy Places',
        placeCount: '21 Places',
    }, {
        image: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
        caption: '13 Best Korean Restaurants',
        placeCount: '13 Places',
    }, {
        image: 'https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg',
        caption: '10 Celeb-loved Places',
        placeCount: '10 Places',
    }])
    return (<>
        <div style={{ height: '31rem', overflow: 'hidden' }} className=' w-full flex flex-row bg-gray-100 justify-center items-center'>
            <div className='h-full w-4/5'>
                <div className='mt-3 md:mt-4 md:text-4xl text-2xl font-sans' style={{ fontWeight: '500' }}>Collections</div>
                <div className='mt-3 md:mt-6'>
                    <div className='text-sm md:text-xl font-light'>Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends</div>
                    <div className='mt-3 lg:mt-4'>
                        <Swiper {...config} >
                            {restaurant.map((data, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <DiningCarouselCard />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >
    </>
    )
}

export default DiningCarousel;

/*
 breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            1024: {
                navigation: true,
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
*/