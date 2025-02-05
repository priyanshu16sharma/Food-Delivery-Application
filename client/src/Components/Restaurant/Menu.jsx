import React, { useState, useCallback } from 'react';
import ImageViewer from 'react-simple-image-viewer';


const Menu = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
        'https://b.zmtcdn.com/data/menus/341/19522341/9b1402f2cccd2d28ffdb2c9e0082cadb.jpg',
        'https://b.zmtcdn.com/data/menus/341/19522341/7102e84789d558fddde8ecdc57323af7.jpg',
        'https://b.zmtcdn.com/data/menus/341/19522341/1839adcb3f2d5e15e49a8c433431de8e.jpg',
        'https://b.zmtcdn.com/data/menus/341/19522341/c8b5814fd11f3d3b927585fa6563f26e.jpg',
    ];

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (<>

        {isViewerOpen && (
            <ImageViewer
                src={images}
                currentIndex={currentImage}
                disableScroll={false}
                closeOnClickOutside={true}
                onClose={closeImageViewer}
            />
        )}
        <div className="flex items-center justify-center">
            <div className="w-4/5">
                <section className='Menu-Section py-4'>
                    <div className="text-3xl font-semibold">NOTO's Menu</div>
                    <div className='text-2xl pt-5 font-semibold'>Menu</div>
                    <div className='pt-3' onClick={setIsViewerOpen}>
                        <img src="https://b.zmtcdn.com/data/menus/341/19522341/9b1402f2cccd2d28ffdb2c9e0082cadb.jpg" alt="menu" style={{ objectFit: "contain", height: "17rem", border: "1px solid white", borderRadius: "5px" }} />
                    </div>
                    <div className="text-xl px-1 font-semibold">Menu</div>
                    <div className="text-md text-gray-500 px-1">{images.length + " pages"}</div>

                </section>
            </div>
        </div>


    </>
    )
}

export default Menu;