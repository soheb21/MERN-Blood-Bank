import React from 'react'
import Layout from "../components/Layout"
import { Link } from "react-router-dom"

const Err404 = () => {
    return (
        <Layout>
            <section className=" md:py-2 md:px-4 px-4  items-center flex justify-center flex-col-reverse lg:flex-row md:gap-18 gap-8">
                <div className="xl:pt-14 w-full xl:w-1/2 relative pb-2 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div className>
                                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                    Looks like you've found the
                                    doorway to the great nothing
                                </h1>
                                <p className="md:mb-16 mb-6 text-gray-800 font-semibold">Sorry about that! Please visit our hompage to get where you need to go.</p>
                                <Link to={"/"} className="sm:w-full lg:w-auto my-2 border rounded md p-4  text-center bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-opacity-50">Take me there!</Link>
                            </div>
                        </div>
                        <div className='opacity-10'>
                            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
                </div>
            </section>
        </Layout>


    )
}

export default Err404