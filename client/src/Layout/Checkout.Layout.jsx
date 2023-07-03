import React from 'react'
import NavBar from '../Components/Navbar';
const CheckoutLayout = (Component) => ({ ...props }) => {
    return (
        <>
            <div>Checkout.Layout</div>
            <NavBar />
            <div>
                <Component {...props} />
            </div>
        </>
    )
}

export default CheckoutLayout;