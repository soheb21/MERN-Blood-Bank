import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { selectInventory } from '../redux/features/inventory/inventorySlice';
import moment from "moment"
import Spinner from '../utils/Spinner';
import { getInAndOutBloodRecords } from '../redux/features/inventory/inventoryAction';
import { selectUser } from '../redux/features/auth/authSlice';


const Donation = () => {
    const { loading, error, inAndOut } = useSelector(selectInventory);
    const { user } = useSelector(selectUser)

    const dispatch = useDispatch();
    useEffect(() => {
        const filter = {
            inventoryType: "in",
            doner: user?._id

        }
        dispatch(getInAndOutBloodRecords(filter));
    }, [])
    console.log({ inAndOut })
    return (
        <Layout>
            {
                error && <p className='text-red-500 '>{error}</p>
            }
            {
                loading ? <Spinner /> : (
                    <div className="w-full  flex overflow-x-scroll no-scrollbar">
                        <table className=' mt-2 w-full ' >
                            <thead className='bg-white  '>
                                <tr className='md:text-lg text-red-600 bg-purple-200  '>
                                    <th>Blood Group</th>
                                    <th>Inventory TYpe</th>
                                    <th>Quantity</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                </tr>
                            </thead>

                            <tbody className='bg-white text-purple-700 shadow-md '>

                                {
                                    inAndOut && inAndOut.map((item) => (
                                        <tr key={item._id} >
                                            <td className="p-2 shadow-md">{item?.bloodGroup}</td>
                                            <td className="p-2 shadow-md">{item?.inventoryType}</td>
                                            <td className="p-2 shadow-md">{item?.quantity}</td>
                                            <td className="p-2 shadow-md">{item?.email}</td>
                                            <td className="p-2 shadow-md">{moment(item?.createdAt).format('MMMM-DD-YYYY  h:mm:ss a')}</td>

                                        </tr>

                                    ))
                                }


                            </tbody>


                        </table>
                    </div>
                )
            }
        </Layout>
    )
}

export default Donation