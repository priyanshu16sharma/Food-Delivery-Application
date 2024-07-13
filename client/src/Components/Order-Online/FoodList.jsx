import React, { useEffect } from 'react';
import FoodItems from './FoodItems';


const FoodList = (props) => {


    return (
        <>
            <div className="h-full w-full " id={props.target + "nav"}>

                <section className="categoryName">
                    <div className="text-3xl font-medium py-3" >
                        {props.collectionName}
                    </div>
                </section>


                <section className="foodMenu">
                    <div className='flex flex-col gap-3'>
                        {props.collectionMenu.map((elem, index) => { return <FoodItems {...elem} key={index} /> })}
                    </div>
                    <div className='pt-4'><hr /></div>
                </section>

            </div>
        </>
    )
}

export default FoodList;