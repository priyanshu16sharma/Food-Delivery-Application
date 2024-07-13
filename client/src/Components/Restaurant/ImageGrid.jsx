import React from 'react'

const ImageGrid = () => {
    return (
        <>
            <hr />
            <div className='mt-5 h-96 flex flex-col items-center'>
                <div className='h-full w-4/5 flex  col gap-1'>
                    <div className="basis-4/6 overflow-hidden">
                        <img src="https://b.zmtcdn.com/data/pictures/chains/8/19803678/4c5bffe281723afaab3c29838c6c5267.jpg" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} className=' roundedtransition-transform transition-filter ease-in-out duration-1000 hover:scale-110 hover:brightness-110' />
                    </div>
                    <div className="basis-2/6 flex flex-col gap-1">
                        <div className=" h-1/2 relative">
                            <div className="h-full w-full brightness-50">
                                <img src="https://b.zmtcdn.com/data/pictures/chains/8/19803678/4c5bffe281723afaab3c29838c6c5267.jpg" alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }} className='rounded' />
                            </div>
                            <div className='absolute w-full text-white text-center bottom-20 '><h3>View Gallery</h3></div>
                        </div>
                        <div className="bg-gray-400 basis-1/2 rounded">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageGrid