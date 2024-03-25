import React from 'react'
import Spinner from '../../utils/Spinner'
import moment from 'moment'

const AdminTable = ({ loading, error, data, controls, handleDelete }) => {
    return (
        <>
            {
                error && <p className='text-red-500 '>{error}</p>
            }
            {
                loading ? <Spinner /> : (
                    <div className="w-full  flex overflow-x-scroll no-scrollbar">
                        <table className=' mt-2 w-full ' >
                            <thead className='bg-white  '>
                                <tr className='md:text-lg text-red-600 bg-purple-200  '>
                                    {
                                        controls?.map((i, ind) => (
                                            <th key={ind}>{i}</th>
                                        ))
                                    }
                                </tr>
                            </thead>

                            <tbody className='bg-white text-purple-700 shadow-md '>

                                {
                                    data && data.map((item) => (
                                        <tr key={item._id} >
                                            <td className="p-2 shadow-md">{item?.email}</td>
                                            <td className="p-2 shadow-md">{item?.name || item?.organisationName || item?.hospitalName}</td>
                                            <td className="p-2 shadow-md">{item?.phone}</td>
                                            <td className="p-2 shadow-md">{item?.address}</td>
                                            <td className="p-2 shadow-md">{moment(item?.createdAt).format('MMMM-DD-YYYY  h:mm:ss a')}</td>
                                            <td className="p-2 shadow-md"><button onClick={() => handleDelete(item._id)} className='text-red-500 text-lg'><i className="fa-solid fa-trash"></i></button></td>
                                        </tr>

                                    ))
                                }


                            </tbody>


                        </table>
                    </div>
                )
            }
        </>

    )
}

export default AdminTable