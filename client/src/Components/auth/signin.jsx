import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { FcGoogle } from "react-icons/fc";

const SignIn = ({ isOpen, setIsOpen }) => {
    const [userInfo, setUserInfo] = useState({
        emailId: "",
        password: ""
    })



    const recordEmail = (e) => {
        setUserInfo((prev) => ({ ...prev, emailId: e.target.value }))
    }

    const recordPassword = (e) => {
        setUserInfo((prev) => ({ ...prev, password: e.target.value }))
    }

    const closeModal = (hi) => {
        setIsOpen(false)
    }

    const submit = (e) => {

        setUserInfo({
            emailId: "",
            password: ""
        });
        closeModal();
    }

    const googleSignIn = () => {
        window.location.href = "https://localhost:4000/auth/google"
        console.log("Being called");
    }

    return (
        <>

            <Transition appear show={isOpen} as={Fragment} className="z-30">
                <Dialog as="div" className="relative z-10" onClose={() => { }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" ></div>
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
                                        className="text-lg font-medium leading-6 text-gray-900 cursor-pointer"
                                    >
                                        <div className="h-auto w-5" onClick={closeModal}>
                                            <RxCross1 />
                                        </div>
                                    </Dialog.Title>
                                    <div className="mt-2 flex flex-col gap-3 w-full">
                                        <button
                                            className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
                                            onClick={googleSignIn}
                                        >
                                            Sign In With Google <FcGoogle />
                                        </button>

                                        <form className="flex flex-col gap-2">
                                            <div className="w-full flex flex-col gap-2">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    // value={userData.email}
                                                    onChange={recordEmail}
                                                    placeholder="user@email.com"
                                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                                                />
                                            </div>
                                            <div className="w-full flex flex-col gap-2">
                                                <label htmlFor="email">Password</label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    //value={userData.password}
                                                    onChange={recordPassword}
                                                    placeholder="*********"
                                                    className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
                                                />
                                            </div>
                                            <div
                                                className="w-full text-center bg-zomato-400 text-white px-2 rounded-lg py-2 cursor-pointer bg-red-400"
                                                onClick={submit}
                                            >
                                                Sign In
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )

}

export default SignIn