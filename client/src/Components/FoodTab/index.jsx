import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

const LargeTab = () => {
    const { type } = useParams();
    const [category, setcategory] = useState([{
        'id': 'delivery',
        'image': 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png',
        'activeImage': 'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png',
        'name': 'Delivery',
        'activeColor': 'amber-100',
    },
    {
        'id': 'dineout',
        'image': 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png',
        'activeImage': 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png',
        'name': 'Dining Out',
        'activeColor': 'cyan-100'
    },
    {
        'id': 'nutrition',
        'image': 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png',
        'activeImage': 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png',
        'name': 'Nutrition',
        'activeColor': 'cyan-100'
    }
    ])

    console.log(category[0].activeColor);
    return (
        <>
            <div className='h-26 w-full flex  flex-row justify-center border-b items-center  lg:flex'>
                <div className="h-full w-4/5 flex  flex-row justify-start gap-4">
                    {category.map((item, index) => {
                        return (<Link key={item.id} to={`/${item.id}`}>
                            <div className={classNames('h-full w-auto flex flex-row p-4  items-center', { " border-b-2 border-b-red-500": type === item.id })}>
                                <div className={classNames(
                                    "h-16 w-24 border rounded-full flex items-center justify-center",
                                    {
                                        [`bg-${item.activeColor}`]: type === item.id,
                                    }, {
                                    "bg-gray-100": type !== item.id,
                                }
                                )}>
                                    <img src={type === item.id ? item.activeImage : item.image} alt="" className='h-7 w-8' />
                                </div>
                                <div className={classNames('h-14 flex items-center w-full bg-white z-20 text-xl gray-200 p-4', {
                                    "text-red-500 font-medium": type === item.id,
                                })}>
                                    <span >{item.name}</span>
                                </div>
                            </div>
                        </Link>)
                    })

                    }
                </div>
            </div >
        </>
    )
}


const SmallTab = () => {
    const { type } = useParams();
    const [category, setcategory] = useState([{
        'id': 'delivery',
        'image': 'https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png',
        'activeImage': 'https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png',
        'name': 'Delivery',
        'activeColor': 'amber-100',
    },
    {
        'id': 'dineout',
        'image': 'https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png',
        'activeImage': 'https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png',
        'name': 'Dine Out',
        'activeColor': 'cyan-100'
    },
    {
        'id': 'nutrition',
        'image': 'https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png',
        'activeImage': 'https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png',
        'name': 'Nutrition',
        'activeColor': 'cyan-100'
    }
    ])

    return (<>
        <div className='w-full h-18 grid grid-cols-3 fixed border-t bottom-0 z-20 bg-neutral-50'>
            {category.map((item, index) => {
                return (<Link to={`/${item.id}`}>
                    <div className={classNames('h-full flex flex-col items-center justify-center pt-1', { "border-t-2 border-t-red-500 ": type === item.id })}>
                        <div className='flex items-center h-10 w-10 rounded-full bg-gray-200 justify-center'>
                            <img src={type === item.id ? item.activeImage : item.image} alt="jdncjd" className='h-6' />
                        </div>
                        <div className={classNames('text-sm w-auto text-start flex items-center',
                            { "text-red-500 font-medium": type === item.id }
                        )}>
                            {item.name}
                        </div>

                    </div>
                </Link>)
            })}
        </div>
    </>)


}

const CategoryTab = () => {
    return (<>
        <div className='grid lg:hidden z-30'> <SmallTab /></div>
        <div className='hidden lg:grid z-10'><LargeTab /></div>
    </>)
}



export default CategoryTab;