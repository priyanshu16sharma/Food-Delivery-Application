import React from 'react';
import { useState } from 'react';
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

import MenuCollectionList from "../Order-Online/menuCollectionList";
import FoodItems from '../Order-Online/FoodItems';
import FoodList from '../Order-Online/FoodList';

const OrderOnline = () => {

    const [menu, setMenu] = useState([
        {
            collectionName: "Exclusive Mango Mania",
            collectionMenu: [{
                foodName: "Mango Pastry",
                rating: 4,
                price: 219,
                description: "Healthy signature broth with exotic vegetables and herbs"

            }]
        },
        {
            collectionName: "Pastries",
            collectionMenu: [{
                foodName: "PineApple Pastry",
                rating: 3.5,
                price: 179,
                description: "Hot and sour soup is a spicy tangy accompaniment for all your meal and is loaded with vegetables."

            },
            {
                foodName: "BlackForest Pastry",
                rating: 4,
                price: 350,
                description: "bla bla bla"

            }
            ]
        },
        {
            collectionName: "Jar Cake",
            collectionMenu: [{
                foodName: "Choco Mud Jar Cake",
                rating: 4.5,
                price: 301,
                description: "Cake that u can eat duhhh"
            }]
        },
        {
            collectionName: "Verrine Cups",
            collectionMenu: [{
                foodName: "Verrine Fudge",
                rating: 4,
                price: 321,
                description: "Verrine cups which is edible as well"
            }]
        },
        {
            collectionName: "Veggie Vaganza",
            collectionMenu: [{
                foodName: "Mango Pastry",
                rating: 4,
                price: 219,
                description: "Healthy signature broth with exotic vegetables and herbs"

            }]
        },
        {
            collectionName: "Dessert",
            collectionMenu: [{
                foodName: "PineApple Pastry",
                rating: 3.5,
                price: 179,
                description: "Hot and sour soup is a spicy tangy accompaniment for all your meal and is loaded with vegetables."

            },
            {
                foodName: "BlackForest Pastry",
                rating: 4,
                price: 350,
                description: "bla bla bla"

            }
            ]
        },
        {
            collectionName: "Booze",
            collectionMenu: [{
                foodName: "Choco Mud Jar Cake",
                rating: 4.5,
                price: 301,
                description: "Cake that u can eat duhhh"
            }]
        },
        {
            collectionName: "Cup Cake",
            collectionMenu: [{
                foodName: "Verrine Fudge",
                rating: 4,
                price: 321,
                description: "Verrine cups which is edible as well"
            }]
        }

    ]);
    const [selected, setSelected] = useState("");

    const selectCategory = (e) => {
        console.log(e.target.id)
        if (e.target.id) { setSelected(e.target.id); console.log("selected" + e.target.id) }
    }

    return (
        <div className='w-full  flex justify-center items-center '>
            <div className="w-full md:w-4/5 relative ">
                <aside className=' w-1/5 float-left sticky top-64 '>
                    <div className="hidden md:flex flex-col w-full overflow-y-scroll h-auto ">

                        {menu?.map((elem, index) => {
                            return <MenuCollectionList
                                key={index}
                                collectionName={elem.collectionName}
                                collectionMenu={elem.collectionMenu}
                                selected={selected}
                                selectCategory={selectCategory}
                                target={index}
                            />;
                        })}

                    </div>
                </aside>
                <section className='w-full md:w-4/5  float-right border-l-2 sticky overflow-auto top-64'>
                    <div className='food-cart pl-2'>

                        <div className="  h-20  flex flex-col items-start justify-between bg-white">
                            <h3 className='text-3xl p-2 font-medium'>Order Online</h3>
                            <h4 className="flex items-center gap-2 font-light text-gray-500 px-2 text-md">
                                <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                            </h4>
                        </div>
                        <section className="menu">
                            <div className="flex flex-col pl-2 overflow-y-auto">
                                {
                                    menu?.map((elem, index) => {
                                        return <FoodList {...elem} key={index} target={index} />
                                    })
                                }
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default OrderOnline;