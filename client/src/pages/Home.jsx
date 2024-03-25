import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import InventoryForm from '../components/InventoryForm';
import { useDispatch, useSelector } from 'react-redux';
import { getInventoryAsync } from '../redux/features/inventory/inventoryAction';
import { selectInventory } from '../redux/features/inventory/inventorySlice';
import moment from "moment"
import Spinner from '../utils/Spinner';
import { LIMIT } from '../utils/common';
import Pagination from '../components/Pagination';
import { selectUser } from '../redux/features/auth/authSlice';

const Home = () => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch();
    const { TotalItems, inventory, loading, error } = useSelector(selectInventory);
    const { user } = useSelector(selectUser);
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(getInventoryAsync(page));
    }, [page])

    const totalPage = Math.ceil(TotalItems / LIMIT);



    return (
        <Layout>
            <section className='w-full  relative'>
                {user.role !== "doner" && <h1 onClick={() => setShow(!show)} className='text-start relative  transition delay-150 ease-in-out bg-green-500 w-fit p-2 text-white cursor-pointer hover:bg-purple-400'>+Add Inventory</h1>}
                {
                    show && <div className="absolute h-full w-full"><InventoryForm show={show} setShow={setShow} /></div>
                }
                {
                    error && <p className='text-red-500 '>{error}</p>
                }
                {/* Tabel */}

                {
                    loading ? <Spinner /> : (
                        <div className="w-full  h-full flex flex-col gap-4 overflow-x-scroll no-scrollbar">
                            <table className=' mt-2 w-full ' >
                                <thead className='bg-white  '>
                                    <tr className='md:text-lg text-red-600 bg-purple-200  '>
                                        <th >Type</th>
                                        <th >Doner Email</th>
                                        <th >Blood Group</th>
                                        <th >Qunatity</th>
                                        <th >Time</th>
                                    </tr>
                                </thead>

                                <tbody className='bg-white text-purple-700 shadow-md '>

                                    {
                                        inventory && inventory.map((item) => (
                                            <tr key={item._id} >
                                                <td className="md:px-6 px-3 md:py-3 shadow-md">{item.inventoryType}</td>
                                                <td className="md:px-6 px-3 md:py-3 shadow-md">{item.email}</td>
                                                <td className="md:px-6 px-3 md:py-3 shadow-md">{item.bloodGroup}</td>
                                                <td className="md:px-6 px-3 md:py-3 shadow-md">{item.quantity}{"ML"}</td>
                                                <td className="md:px-6 px-3 md:py-3 shadow-md">{moment(item.createdAt).format('MMMM-DD-YYYY  h:mm:ss a')}</td>

                                            </tr>

                                        ))
                                    }



                                </tbody>

                            </table>
                            <Pagination page={page} setPage={setPage} totalPage={totalPage} />

                        </div>
                    )
                }

            </section>
        </Layout >
    )
}

export default Home