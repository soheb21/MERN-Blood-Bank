import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { selectInventory } from '../redux/features/inventory/inventorySlice';
import moment from "moment"
import Spinner from '../utils/Spinner';
import { getOrganisationByDoner, getOrganisationByHospital } from '../redux/features/inventory/inventoryAction';
import { selectUser } from '../redux/features/auth/authSlice';

const Organisation = () => {
    const { loading, error, organisation } = useSelector(selectInventory);
    const dispatch = useDispatch();
    const { user } = useSelector(selectUser);
    useEffect(() => {
        if (user.role === "doner") {
            dispatch(getOrganisationByDoner());
        }
        if (user.role === "hospital") {
            dispatch(getOrganisationByHospital());
        }
    }, [user])
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
                                    <th >Email</th>
                                    <th >Name</th>
                                    <th >phone</th>
                                    <th >Address</th>
                                    <th >Time</th>
                                </tr>
                            </thead>

                            <tbody className='bg-white text-purple-700 shadow-md '>

                                {
                                    organisation && organisation.map((item) => (
                                        <tr key={item._id} >
                                            <td className="p-2 shadow-md">{item?.email}</td>
                                            <td className="p-2 shadow-md">{item?.name || item?.organisationName}</td>
                                            <td className="p-2 shadow-md">{item?.phone}</td>
                                            <td className="p-2 shadow-md">{item?.address}</td>
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

export default Organisation