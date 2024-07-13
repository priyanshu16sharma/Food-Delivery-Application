import React from 'react';
import Navbar from '../Components/Navbar/index';

import ImageGrid from '../Components/Restaurant/ImageGrid';
//import ImageGrid from '../Components/Restaurant/ImageGrid';
// import InfoButton from '../Components/Restaurant/InfoButton';
import RestaurantInfo from '../Components/Restaurant/RestaurantInfo';
import Tabs from '../Components/Restaurant/Tabs';
// import CartContainer from '../Components/Restaurant/CartContainer';

import { TiStarOutline } from 'react-icons/ti';
import { RiDirectionLine, RiShareForwardLine } from 'react-icons/ri';
import { BiBookmarkPlus } from 'react-icons/bi';

const Restaurant = (Component) => ({ ...props }) => {
    return (
        <>
            <div><Navbar /></div>
            <ImageGrid />
            <div className="md:sticky top-0  bg-white" style={{ zIndex: 1 }}>
                <RestaurantInfo />
                <div className=' overflow-x-auto  md:overflow-hidden'>
                    <Tabs />
                </div>

            </div>
            <Component {...props} />



        </>
    )
}

export default Restaurant;

{/* <div>
                <ImageGrid image={ } />
                <RestaurantInfo name='' deliveryRating='' cuisine='' address='' />
                <div>
                    <InfoButton isActive='true'>
                        <TiStarOutline /> AddReview
                    </InfoButton>
                    <InfoButton >
                        <RiDirectionLine /> Direction
                    </InfoButton>
                    <InfoButton >
                        <BiBookmarkPlus /> Bookmark
                    </InfoButton>
                    <InfoButton isActive='true'>
                        <RiShareForwardLine /> Share
                    </InfoButton>
                </div>
            </div> */}