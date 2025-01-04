import React from 'react';
import Link from 'next/link'

function HeroSection() {
    return (
        <div>
            <div
                className="relative h-screen w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start text-center sm:text-left bg-cover bg-center"
                style={{
                    backgroundImage:
                        'url(https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

                <main className="px-8 sm:px-24 z-10 sm:w-2/3">
                    <div className="">
                        <h2 className="text-4xl tracking-tight leading-10 font-extrabold sm:text-5xl text-white sm:leading-none md:text-6xl">
                        Savory
                        {' '}
                            <span className="text-indigo-600">Haven</span>
                        </h2>
                        <p className="mt-3 text-white sm:mt-5 sm:max-w-xl md:mt-5 text-lg font-light">
                        Where Flavors Meet Memories!
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex justify-start">
                            <div className="rounded-md shadow">
                                <Link
                                    href="/book-date"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                                >
                                    Book Table
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Link
                                    href="coming-soon"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                                >
                                    Book of Event
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>

                <div className="flex sm:flex-col z-10"></div>
            </div>
        </div>
    );
}

export default HeroSection;
