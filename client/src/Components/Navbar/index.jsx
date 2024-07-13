import { React, useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import SignIn from '../auth/signin';
import Signup from '../auth/signup';

const NavBarSmall = ({ setIsDropdown, isDropdown, openModal, openSignUpModal }) => {

    const user = {
        //     fullname: "Priyanshu",
    }
    return (
        <>
            <div className='w-full flex flex-row my-1 items-center justify-between'>
                <div className='w-26 mx-4 h-5' >
                    <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato-icon" className='w-full h-full' />
                </div>
                <div className='w-28 '>
                    <div className='w-full p-1'>
                        {user.fullname ? (
                            <>
                                <div onClick={() => setIsDropdown((prev) => !prev)} className='absolute'>
                                    <img src="https://th.bing.com/th/id/OIP.CsCEiIgcxJ54PXFJ-Ep5nQAAAA?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-9 h-9 relative ' style={{ left: '4.4rem' }} />
                                </div>
                                {(isDropdown) && (<div className=' w-27 z-20 right-3 my-1 absolute shadow-lg flex flex-col '>
                                    <button className='font-sans text-lg bg-neutral-50 text-center border-2 h-10 border-gray-50 hover:border-slate-100 rounded px-4 hover:bg-slate-100'>Sign Out</button>
                                </div>
                                )}
                            </>)
                            : (<>
                                <div onClick={() => setIsDropdown((prev) => !prev)} className='relative '>
                                    <img src="https://th.bing.com/th/id/OIP.AiUsnzFoaQVt7VM68DC4ggHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-9 h-9 relative ' style={{ left: '4.4rem' }} />
                                </div>
                                {(isDropdown) && (<div className=' w-27 z-20 right-3 my-1 absolute shadow-lg flex flex-col '>
                                    <button className='font-sans text-lg bg-neutral-50 text-center border-2 h-10 border-slate-50 hover:border-slate-100 rounded px-4 hover:bg-slate-100' onClick={openModal}>Sign In</button>
                                    <button className=' font-sans text-lg bg-neutral-50  text-center border-2 h-10 border-slate-50 hover:border-slate-100 rounded px-4 hover:bg-slate-100' onClick={openSignUpModal}>Sign up</button>
                                </div>
                                )}
                            </>)}


                    </div>
                </div>

            </div >
        </>
    )
}

const NavbarLarge = ({ setIsDropdown, isDropdown, openModal, openSignUpModal }) => {

    const user = {
        // fullname: "Priyanshu",
    }
    return (<>
        <div className='w-full flex flex-row items-center justify-center  h-20  overflow-hidden'>
            <div className='basis-1/5 mx-2 h-9 flex justify-end  px-3' >
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato-icon" className='w-21 h-8' />
            </div>

            <div className='h-3/4 basis-3/5 m-2'>
                <div className='w-5/6  h-full flex border border-gray-200 rounded-lg shadow-lg  flex-row items-center p-2'>
                    <div className=''>
                        <IoLocationSharp size={'1.3rem'} color='rgb(255, 77, 77)'></IoLocationSharp>
                    </div>
                    <div>
                        <input type="text" placeholder="Ahmedabad" className='px-2 text-lg w-56 ' />
                    </div>
                    <div className='p-0 flex flex-row'>
                        <IoMdArrowDropdown size={'1.5rem'} color={'rgb(211,211,211)'} className=''></IoMdArrowDropdown>
                        <RxDividerVertical size={'1.5rem'} color={'rgb(211,211,211)'} className='gray-100'></RxDividerVertical>
                    </div>
                    <div className='w-full'>
                        <input type="text" placeholder="Search for restaurant, cuisine or dishes" className='px-2 text-lg w-full outline-0 truncate' />
                    </div>
                </div>
            </div>

            <div className='basis-1/5'>
                <div className='w-28 '>
                    <div className='w-full'>
                        {user.fullname ? (
                            <>
                                <div onClick={() => setIsDropdown((prev) => !prev)} className='relative '>
                                    <img src="https://th.bing.com/th/id/OIP.CsCEiIgcxJ54PXFJ-Ep5nQAAAA?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-16 h-16 relative left-56' />
                                </div>
                                {(isDropdown) && (<div className=' w-27 z-20 right-3 my-1 absolute shadow-lg flex flex-col '>
                                    <button className='font-sans text-lg text-center border-2 h-10 border-gray-50 hover:border-slate-100 rounded px-4 hover:bg-slate-100'>Sign Out</button>
                                </div>
                                )}
                            </>)
                            : (<>
                                <div onClick={() => setIsDropdown((prev) => !prev)} className='relative '>
                                    <img src="https://th.bing.com/th/id/OIP.AiUsnzFoaQVt7VM68DC4ggHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" className='w-16 h-16 relative left-48' />
                                </div>
                                {(isDropdown) && (<div className=' w-27 z-20 right-3 my-1 absolute shadow-lg flex flex-col '>
                                    <button className='font-sans text-lg text-center border-2 h-10 border-slate-50 hover:border-slate-100 rounded px-4 hover:bg-slate-100' onClick={openModal}>Sign In</button>
                                    <button className=' font-sans text-lg text-center border-2 h-10 border-slate-50 hover:border-slate-100 rounded px-4 hover:bg-slate-100' onClick={openSignUpModal}>Sign up</button>
                                </div>
                                )}
                            </>)}


                    </div>
                </div>
            </div>

        </div >
    </>)
}

const NavBar = () => {
    const [isDropdown, setIsDropdown] = useState(false);
    let [isOpen, setIsOpen] = useState(false)
    let [signUpisOpen, setSignUpIsOpen] = useState(false)

    function closeModal(hi) {
        setIsOpen(false)
        console.log("called for" + hi)
    }

    function openModal() {
        setIsOpen(true);
        setIsDropdown(false);

    }

    function openSignUpModal() {
        setSignUpIsOpen(true)
        setIsDropdown(false);
    }

    function closeSignUpModal() {
        setSignUpIsOpen(false);
    }

    return (<>
        <SignIn isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} openModal={openModal} />
        <Signup isOpen={signUpisOpen} setIsOpen={setSignUpIsOpen} closeModal={closeSignUpModal} openModal={openSignUpModal} />
        <div className='w-full p-1 m-0 shadow-lg  lg:hidden'><NavBarSmall isDropdown={isDropdown} setIsDropdown={setIsDropdown} openModal={openModal} openSignUpModal={openSignUpModal} /></div>
        <div className='hidden lg:block w-full'><NavbarLarge isDropdown={isDropdown} setIsDropdown={setIsDropdown} openModal={openModal} openSignUpModal={openSignUpModal} /></div>
    </>);
}

export default NavBar;