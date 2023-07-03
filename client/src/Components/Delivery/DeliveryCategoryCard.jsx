import React from 'react'

const SmallCategoryCard = ({ image, category }) => {
    return (<>
        <div className='h-32 flex flex-col items-center justify-center'>
            <div><img src={image} alt="" className='border rounded-full' style={{ height: '4.7rem' }} /></div>
            <div className='text-sm font-sans m-2'>{category}</div>

        </div>
    </>)
}

const LargeCategorycard = ({ image, category }) => {
    return (<>
        <div className='flex flex-col h-46 w-44 justify-center items-center'>
            <div className='p-1'><img src={image} alt="" className='border rounded-full h-36' /></div>
            <div className='text-xl' style={{ fontWeight: '420' }}>{category}</div>
        </div>
    </>)
}

const DeliveryCategoryCard = (props) => {
    return (<>
        <div className='flex lg:hidden justify center'><SmallCategoryCard {...props} /></div>
        <div className='lg:flex hidden m-2 w-44'><LargeCategorycard {...props} /></div>
    </>
    )
}

export default DeliveryCategoryCard