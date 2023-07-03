import React, { useState } from 'react'
import DeliveryCarousel from './DeliveryCarousel'
import RestaurantCard from '../Restaurant/RestaurantCard'
const Delivery = () => {
    const restaurant = [{
        id: 'dncdnivdvovon',
        image: 'https://b.zmtcdn.com/data/pictures/chains/0/307300/b475a9d621c7b7ce7085ea55ccc06f36_o2_featured_v2.jpg',
        restaurantName: 'Salad Days',
        rating: '3.6',
        cuisine: ['Healthy Food', 'Salad', 'Juice', 'MilkShakes'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdkvdojn',
        image: 'https://b.zmtcdn.com/data/pictures/chains/3/143/cb4822bd0ecf5e677eea7956c6ebe926_o2_featured_v2.jpg',
        restaurantName: "Domino's Pizza",
        rating: '4.3',
        cuisine: ['Pizza', 'Fast Food'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdpsmf',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/18363082/4aa2853159bd98bad02a7cd5f2f40be6_o2_featured_v2.jpg',
        restaurantName: "Kwality Wall's Frozen Dessert",
        rating: '4.0',
        cuisine: ['Ice Cream', 'Dessert'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivdvovon',
        image: 'https://b.zmtcdn.com/data/pictures/chains/0/307300/b475a9d621c7b7ce7085ea55ccc06f36_o2_featured_v2.jpg',
        restaurantName: 'Salad Days',
        rating: '3.6',
        cuisine: ['Healthy Food', 'Salad', 'Juice', 'MilkShakes'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdkvdojn',
        image: 'https://b.zmtcdn.com/data/pictures/chains/3/143/cb4822bd0ecf5e677eea7956c6ebe926_o2_featured_v2.jpg',
        restaurantName: "Domino's Pizza",
        rating: '4.3',
        cuisine: ['Pizza', 'Fast Food'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdpsmf',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/18363082/4aa2853159bd98bad02a7cd5f2f40be6_o2_featured_v2.jpg',
        restaurantName: "Kwality Wall's Frozen Dessert",
        rating: '4.0',
        cuisine: ['Ice Cream', 'Dessert'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivdvovon',
        image: 'https://b.zmtcdn.com/data/pictures/chains/0/307300/b475a9d621c7b7ce7085ea55ccc06f36_o2_featured_v2.jpg',
        restaurantName: 'Salad Days',
        rating: '3.6',
        cuisine: ['Healthy Food', 'Salad', 'Juice', 'MilkShakes'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdkvdojn',
        image: 'https://b.zmtcdn.com/data/pictures/chains/3/143/cb4822bd0ecf5e677eea7956c6ebe926_o2_featured_v2.jpg',
        restaurantName: "Domino's Pizza",
        rating: '4.3',
        cuisine: ['Pizza', 'Fast Food'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdpsmf',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/18363082/4aa2853159bd98bad02a7cd5f2f40be6_o2_featured_v2.jpg',
        restaurantName: "Kwality Wall's Frozen Dessert",
        rating: '4.0',
        cuisine: ['Ice Cream', 'Dessert'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivdvovon',
        image: 'https://b.zmtcdn.com/data/pictures/chains/0/307300/b475a9d621c7b7ce7085ea55ccc06f36_o2_featured_v2.jpg',
        restaurantName: 'Salad Days',
        rating: '3.6',
        cuisine: ['Healthy Food', 'Salad', 'Juice', 'MilkShakes'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdkvdojn',
        image: 'https://b.zmtcdn.com/data/pictures/chains/3/143/cb4822bd0ecf5e677eea7956c6ebe926_o2_featured_v2.jpg',
        restaurantName: "Domino's Pizza",
        rating: '4.3',
        cuisine: ['Pizza', 'Fast Food'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdpsmf',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/18363082/4aa2853159bd98bad02a7cd5f2f40be6_o2_featured_v2.jpg',
        restaurantName: "Kwality Wall's Frozen Dessert",
        rating: '4.0',
        cuisine: ['Ice Cream', 'Dessert'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivdvovon',
        image: 'https://b.zmtcdn.com/data/pictures/chains/0/307300/b475a9d621c7b7ce7085ea55ccc06f36_o2_featured_v2.jpg',
        restaurantName: 'Salad Days',
        rating: '3.6',
        cuisine: ['Healthy Food', 'Salad', 'Juice', 'MilkShakes'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdkvdojn',
        image: 'https://b.zmtcdn.com/data/pictures/chains/3/143/cb4822bd0ecf5e677eea7956c6ebe926_o2_featured_v2.jpg',
        restaurantName: "Domino's Pizza",
        rating: '4.3',
        cuisine: ['Pizza', 'Fast Food'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdpsmf',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/18363082/4aa2853159bd98bad02a7cd5f2f40be6_o2_featured_v2.jpg',
        restaurantName: "Kwality Wall's Frozen Dessert",
        rating: '4.0',
        cuisine: ['Ice Cream', 'Dessert'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivdvovon',
        image: 'https://b.zmtcdn.com/data/pictures/chains/0/307300/b475a9d621c7b7ce7085ea55ccc06f36_o2_featured_v2.jpg',
        restaurantName: 'Salad Days',
        rating: '3.6',
        cuisine: ['Healthy Food', 'Salad', 'Juice', 'MilkShakes'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdkvdojn',
        image: 'https://b.zmtcdn.com/data/pictures/chains/3/143/cb4822bd0ecf5e677eea7956c6ebe926_o2_featured_v2.jpg',
        restaurantName: "Domino's Pizza",
        rating: '4.3',
        cuisine: ['Pizza', 'Fast Food'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdpsmf',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/18363082/4aa2853159bd98bad02a7cd5f2f40be6_o2_featured_v2.jpg',
        restaurantName: "Kwality Wall's Frozen Dessert",
        rating: '4.0',
        cuisine: ['Ice Cream', 'Dessert'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivdvovon',
        image: 'https://b.zmtcdn.com/data/pictures/chains/0/307300/b475a9d621c7b7ce7085ea55ccc06f36_o2_featured_v2.jpg',
        restaurantName: 'Salad Days',
        rating: '3.6',
        cuisine: ['Healthy Food', 'Salad', 'Juice', 'MilkShakes'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdkvdojn',
        image: 'https://b.zmtcdn.com/data/pictures/chains/3/143/cb4822bd0ecf5e677eea7956c6ebe926_o2_featured_v2.jpg',
        restaurantName: "Domino's Pizza",
        rating: '4.3',
        cuisine: ['Pizza', 'Fast Food'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdpsmf',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/18363082/4aa2853159bd98bad02a7cd5f2f40be6_o2_featured_v2.jpg',
        restaurantName: "Kwality Wall's Frozen Dessert",
        rating: '4.0',
        cuisine: ['Ice Cream', 'Dessert'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivdvovon',
        image: 'https://b.zmtcdn.com/data/pictures/chains/0/307300/b475a9d621c7b7ce7085ea55ccc06f36_o2_featured_v2.jpg',
        restaurantName: 'Salad Days',
        rating: '3.6',
        cuisine: ['Healthy Food', 'Salad', 'Juice', 'MilkShakes'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdkvdojn',
        image: 'https://b.zmtcdn.com/data/pictures/chains/3/143/cb4822bd0ecf5e677eea7956c6ebe926_o2_featured_v2.jpg',
        restaurantName: "Domino's Pizza",
        rating: '4.3',
        cuisine: ['Pizza', 'Fast Food'],
        cost: '$100 for One'
    }, {
        id: 'dncdnivcdpsmf',
        image: 'https://b.zmtcdn.com/data/pictures/chains/2/18363082/4aa2853159bd98bad02a7cd5f2f40be6_o2_featured_v2.jpg',
        restaurantName: "Kwality Wall's Frozen Dessert",
        rating: '4.0',
        cuisine: ['Ice Cream', 'Dessert'],
        cost: '$100 for One'
    }
    ];
    return (<>
        <div className='h-full w-full'>
            <div>
                <DeliveryCarousel />
            </div>
            <div className='h-auto w-full flex flex-col justify-center items-center '>
                <div className=" h-full bg- w-4/5">
                    <div className='text-3xl p-2 py-8' style={{ fontWeight: '490' }}>Delivery Restaurant in Ahmedabad</div>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                        {restaurant.map((item, index) => {
                            return <RestaurantCard {...item} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Delivery;