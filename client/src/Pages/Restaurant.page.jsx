import React from 'react'
import Restaurant from '../Layout/Restaurant.Layout';
import { Outlet } from 'react-router-dom';
const RedirectRestaurant = () => {
    return (
        <>
            <div>
                Restaurant

            </div>
            <Outlet />
        </>
    )
}

export default Restaurant(RedirectRestaurant);
