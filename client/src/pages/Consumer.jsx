import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { selectInventory } from '../redux/features/inventory/inventorySlice';
import moment from "moment"
import Spinner from '../utils/Spinner';
import { getInAndOutBloodRecords } from '../redux/features/inventory/inventoryAction';
import { selectUser } from '../redux/features/auth/authSlice';


const Consumer = () => {
    const { loading, error, inAndOut } = useSelector(selectInventory);
    const { user } = useSelector(selectUser)

    const dispatch = useDispatch();
    useEffect(() => {
        const filter = {
            inventoryType: "out",
            hospital: user?._id

        }
        dispatch(getInAndOutBloodRecords(filter));
    }, [])
    const TabelHeader = ["Types", "Blood Grp", "Quantity", "Name", "Email", "Time"]
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
                                    {
                                        TabelHeader.map((i, ind) => <th key={ind} >{i}</th>)
                                    }


                                </tr>
                            </thead>

                            <tbody className='bg-white text-purple-700 shadow-md '>

                                {
                                    inAndOut && inAndOut.map((item) => (
                                        <tr key={item._id} >
                                            <td className="p-2 shadow-md">{item?.inventoryType}</td>
                                            <td className="p-2 shadow-md">{item?.bloodGroup}</td>
                                            <td className="p-2 shadow-md">{item?.quantity}</td>
                                            <td className="p-2 shadow-md">{item?.organisaion.organisationName}</td>
                                            <td className="p-2 shadow-md">{item?.organisaion.email}</td>
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

export default Consumer