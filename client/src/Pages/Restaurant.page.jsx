import React from 'react'
import Restaurant from '../Layout/Restaurant.Layout';
import { Outlet } from 'react-router-dom';
const RedirectRestaurant = () => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default Restaurant(RedirectRestaurant);
