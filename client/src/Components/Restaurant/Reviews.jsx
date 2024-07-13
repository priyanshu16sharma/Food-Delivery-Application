import React from 'react'
import ReviewCard from '../Reviews/ReviewCard'
import AddReview from '../Reviews/AddReview'

const Reviews = () => {
    const reviews = [
        {
            userName: "Priyanshu",
            review: "Awesome Food",
            star: "4",
            image: false,
            votes: 5,
            comments: 0,
            isDelhivery: true,
            date: "2023-04-28"
        },
        {
            userName: "Navya",
            review: "Nice Food",
            star: "3",
            image: false,
            votes: 2,
            comments: 0,
            isDelhivery: false,
            date: "2023-04-21"
        },
        {
            userName: "Priyanshu",
            review: "Awesome Food",
            star: "4",
            image: false,
            votes: 5,
            comments: 0,
            isDelhivery: true,
            date: "2023-04-28"
        },
        {
            userName: "Navya",
            review: "Nice Food",
            star: "3",
            image: false,
            votes: 2,
            comments: 0,
            isDelhivery: false,
            date: "2023-04-21"
        }
    ]
    return (
        <>
            <div className="flex items-center justify-center w-full">
                <div className="w-4/5 flex gap-5 justify-items-end md:flex-row-reverse flex-col">
                    <aside className=' lg:w-2/5'>
                        <AddReview />
                    </aside>
                    <div className='w-full'>
                        {reviews.map((elem, index) => {
                            return (<ReviewCard {...elem} key={index} />)
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews;