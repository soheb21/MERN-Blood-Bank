import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux';

import { selectadmin } from '../../redux/features/admin/adminSlice';
import { deleteDonerAsync, getDonerListAsync } from '../../redux/features/admin/adminAction';
import AdminTable from '../../components/Tables/AdminTable';
import { toast } from 'react-toastify';


const DonerList = () => {
    const { loading, error, donerList, mssg } = useSelector(selectadmin);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDonerListAsync());
    }, [])
    const handleDelete = (id) => {
        dispatch(deleteDonerAsync(id))
        toast.success(mssg);
    }
    const donerCtrls = ["Email", "Name", "Phone", "Address", "Time", "Action"]
    return (
        <Layout>
            <AdminTable loading={loading} error={error} controls={donerCtrls} data={donerList} handleDelete={handleDelete} />
        </Layout>
    )
}

export default DonerList