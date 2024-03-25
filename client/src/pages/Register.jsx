import React from 'react'
import Form from '../components/shared/Form'

const Register = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row h-screen w-full items-center justify-around bg-purple-100 '>
            <div className="w-1/2 h-fit drop-shadow-xl  bg-purple-100">
                <img src="register.svg" alt="img1" />
            </div>
            <div className="flex-col items-center overflow-auto">
                <p className='text-purple-700 font-semibold text-center text-xl shadow-md rounded-md p-2 mb-2'>Register</p>
                <Form formType={"register"} />
            </div>
        </div>
    )
}

export default Register