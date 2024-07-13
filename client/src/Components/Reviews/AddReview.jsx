import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useEffect } from 'react';

const AddReview = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [reviewType, setReviewType] = useState("delivery");
    const [reviewData, setReviewData] = useState({
        subject: "",
        comment: "",
        isRestaurantReview: false,
        isFoodReview: false,

    });
    let type = '';

    useEffect(() => {
        console.log("reviewType " + reviewType);
        if (reviewType === 'delivery') {
            setReviewData((prev) => ({ ...prev, isFoodReview: true, isRestaurantReview: false }));
        } else if (reviewType === 'dining') {
            setReviewData((prev) => ({ ...prev, isRestaurantReview: true, isFoodReview: false }));
        }

    }, [reviewType])

    const handleSubject = (e) => {
        setReviewData((prev) => ({ ...prev, subject: e.target.value }));
    }

    const handleComment = (e) => {
        setReviewData((prev) => ({ ...prev, comment: e.target.value }));
    }

    const openModal = () => {
        // if (!localStorage.zomatouser) {
        //     return alert("Luci");

        // }

        setIsOpen(true);

    }

    const getReviewType = (e) => {

        //console.log(type);
        setReviewType(e.target.id);
    }

    const handleSubmit = (e) => {
        console.log(reviewData)
        //close modal
        setIsOpen(false);
    }


    return (<>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => { setIsOpen(false) }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Add Review
                                </Dialog.Title>
                                <div className="mt-2">
                                    <div className='flex text-lg py-1'>
                                        <div className='flex gap-1  '>
                                            <input type="radio" name="reviewType" id="delivery" onChange={getReviewType} checked={reviewType == "delivery"} />
                                            <label htmlFor="delivery">Delivery</label>
                                        </div>
                                        <div className='flex gap-1 px-3 '>
                                            <input type="radio" name="reviewType" id="dining" onChange={getReviewType} checked={reviewType == "dining"} />
                                            <label htmlFor="Dining" >Dining</label>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='p-1 text-lg'>
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                        <div className='w-full border  border-black h-10 rounded-md p-1'>
                                            <input type="text" name='subject' id='subject' className='h-full w-full p-1  outline-none' onChange={(e) => {
                                                setTimeout(() => {
                                                    handleSubject(e);
                                                }, 1000);
                                            }} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className='p-1 text-lg'>
                                            <label htmlFor="subject">Comment</label>
                                        </div>
                                        <div className='w-full border  border-black h-auto rounded-md p-1'>
                                            <textarea rows="4" name='subject' id='subject' className='h-full w-full p-1  outline-none' onChange={(e) => {
                                                setTimeout(() => {
                                                    handleComment(e);
                                                }, 500);
                                            }} />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                        onClose={() => { setIsOpen(false) }}
                                        onClick={(e) => { handleSubmit(e) }}
                                    >
                                        Post
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>


        <div className="lg:sticky lg:top-64 shadow-lg w-full  h-auto ">
            <div className='text-2xl  font-medium p-2 '>Rate your Experience for</div>
            <div className='flex text-lg p-2'>
                <div className='flex gap-1 px-2 '>
                    <input type="radio" name="reviewType" id="delivery" onChange={(e) => getReviewType(e)} checked={reviewType == "delivery"} />
                    <label htmlFor="delivery">Delivery</label>
                </div>
                <div className='flex gap-1 px-2 '>
                    <input type="radio" name="reviewType" id="dining" onChange={(e) => getReviewType(e)} checked={reviewType == "dining"} />
                    <label htmlFor="Dining" >Dining</label>
                </div>
            </div>

            <div className="flex flex-row justify-center p-2 pt-4">
                <button className='text-lg border border-red-400 p-2 rounded-md hover:bg-red-500' onClick={openModal}>Write a Review</button>
            </div>
        </div>
    </>
    )
}

export default AddReview