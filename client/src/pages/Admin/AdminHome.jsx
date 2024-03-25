import React from 'react'
import Layout from '../../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/features/auth/authSlice'

const AdminHome = () => {
    const { user } = useSelector(selectUser)
    return (
        <Layout>
            <section className='flex flex-col gap-4 h-full justify-center items-center'>
                <p className='text-2xl text-purple-600 shadow-md px-2'>Admin Info</p>

                <div className="w-1/2 flex flex-col items-start justify-center h-fit text-purple-700 shadow-lg p-2 bg-white ">
                    <p >Name: <span className='ml-2  text-orange-500'>{user?.name}</span></p>
                    <p >Address: <span className='ml-2  text-orange-500'>{user?.address}</span></p>
                    <p >Phn no: <span className='ml-2  text-orange-500'>{user?.phone}</span></p>
                    <p >email: <span className='ml-2  text-orange-500'>{user?.email}</span></p>
                </div>

            </section>
        </Layout>
    )
}

export default AdminHome