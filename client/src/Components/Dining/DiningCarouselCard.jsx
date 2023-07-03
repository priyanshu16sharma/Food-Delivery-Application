import React from 'react'
import { BiCaretRight } from "react-icons/bi";
const DiningCarouselCard = () => {
    const fading = {
        backgroundImage: "linearGradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)"
    }

    return (
        <section className='card' style={{ height: '22rem', width: '19rem' }}>
            <div className='flex flex-cols p-2 h-full w-full'>
                <section className='poster-image relative'>
                    <div className='h-full w-full '>
                        <img src="https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg" alt="" className='border rounded-md h-full w-full' />
                        <div
                            className="w-full h-full absolute inset-0 rounded-lg"
                            style={{
                                background:
                                    "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
                            }}
                        >
                        </div>
                    </div>
                    <section className='card-text-content absolute h-16 w-56 bottom-0 left-2'>
                        <div className='h-full w-full text-white'>
                            <div className='px-1 align-bottom text-xl truncate w-64'><h1 className='truncate'>9 Unique Dining Experiences</h1></div>
                            <div className='text-md px-1 align-bottom relative'>9 Places <div className='absolute bottom-1 left-14 px-1'><BiCaretRight className='h-4 pt-1' /></div>
                            </div>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default DiningCarouselCard