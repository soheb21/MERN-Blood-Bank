import React from 'react'
import Form from '../components/shared/Form'

const Register = () => {
    return (
        <div className='flex h-screen w-full items-center justify-center'>
            <div className="w-[60%] h-full border-2 border-red-400">Image</div>
            <div className="flex-1 flex flex-col items-center p-2 ">
                <h1>Register</h1>
                <Form formType={"register"} />
            </div>
        </div>
    )
}

export default Register