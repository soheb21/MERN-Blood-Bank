import React from 'react'
import Form from '../components/shared/Form'
const Login = () => {
    return (
        <div className='flex  flex-col-reverse md:flex-row h-screen w-full items-center justify-around bg-purple-100 '>
            <div className="w-1/2 h-fit drop-shadow-xl">
                <img src="login.svg" alt="" />
            </div>
            <div className=" flex flex-col items-center p-2 ">
                <p className='text-purple-700 font-semibold text-center text-xl shadow-md p-2 rounded-md'>Login</p>
                <Form formType={"login"} />
            </div>
        </div>
    )
}

export default Login