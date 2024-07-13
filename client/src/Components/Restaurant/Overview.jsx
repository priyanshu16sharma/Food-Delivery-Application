import React from 'react'
import { useParams } from 'react-router-dom';


//imports
import Map from './Map';
import MenuCollection from './MenuCollection';
import ReviewCard from '../Reviews/ReviewCard';

const Overview = (props) => {
    const { id } = useParams();
    const Cuisines = ["Ice Cream", "Mithai", "Desserts"];
    const reviews = [
        {
            userName: "Priyanshu",
            review: "Awesome Food",
            star: "4",
            image: false,
            votes: 5,
            comments: 0,
            isDelhivery: true,
            date: "2023-04-28"
        },
        {
            userName: "Navya",
            review: "Nice Food",
            star: "3",
            image: false,
            votes: 2,
            comments: 0,
            isDelhivery: false,
            date: "2023-04-21"
        }
    ]
    return (
        <div className='w-screen h-auto flex items-center justify-center'>
            <div className="w-full lg:w-4/5 md:w-full lg:justify-end flex lg:flex-row-reverse lg:px-0 flex-col px-2">
                <section className="map ">
                    <div className='pt-3 pl-4 sticky top-64'>
                        <Map />
                    </div>
                </section>
                <div className="lg:w-4/5 md:w-full">

                    <div className="pt-2 text-3xl font-semibold">About this place</div>

                    <section className="menu">
                        <MenuCollection />
                    </section>

                    <section className="Cuisines py-4">
                        <div className="text-2xl font-medium">Cuisines</div>
                        <div className="flex flex-row gap-2 pt-2">
                            {Cuisines.map((cuisine, index) => {
                                return (<div className="h-10 text-base px-2 border border-green-200 rounded-lg flex items-center justify-center">
                                    {cuisine}
                                </div>)
                            })}
                        </div>
                    </section>

                    <section className='Average-cost py-4 '>

                        <div className="text-2xl font-medium">Average Cost</div>

                        <div className="pt-2 text-lg">$100 for One (approx)</div>
                        <div className=" text-base">Exclusive of all taxes and charges, if any</div>
                    </section>

                    <section className='Popular-Dishes py-4'>
                        <div className="text-2xl font-medium">Popular Dishes</div>
                        <div className="text-lg pt-2">fnnsgbob</div>
                    </section>

                    <section className='Known-for  py-4'>
                        <div className="text-2xl font-medium">People Say This Place Is Known For</div>
                        <div className="text-lg pt-2">fnnsgbob</div>
                    </section>

                    <section className='Average-Cost py-4'>
                        <div className="text-2xl font-medium">Average Cost</div>
                        <div className="text-lg pt-2">fnnsgbob</div>
                    </section>

                    <section className='More-info py-4'>
                        <div className="text-2xl font-medium">More Info</div>
                        <div className="text-lg pt-2">ifnidngniongegn</div>
                    </section>

                    <section className="reviewSection py-4 w-full">
                        <div className="text-2xl font-medium">Restaurant's-Name Reviews</div>
                        {reviews.map((detail, index) => {
                            return <ReviewCard {...detail} />
                        })}
                    </section>


                </div>
            </div>

        </div>
    )
}

export default Overview;