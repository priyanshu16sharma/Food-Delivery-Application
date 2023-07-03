import React from 'react';
import NavBar from '../Components/Navbar';
import CategoryTab from '../Components/FoodTab';
const HomePageLayout = (Component) => ({ ...props }) => {
    return (
        <>

            <NavBar />
            <CategoryTab />
            <div>
                <Component {...props} />
            </div>
        </>
    )
}

export default HomePageLayout;