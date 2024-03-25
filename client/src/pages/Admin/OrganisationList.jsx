import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { selectadmin } from '../../redux/features/admin/adminSlice';
import { deleteOrgAsync, getorgListAsync } from '../../redux/features/admin/adminAction';
import AdminTable from '../../components/Tables/AdminTable';
import { toast } from 'react-toastify';

const OrganisationList = () => {
    const { loading, error, orgList, mssg } = useSelector(selectadmin);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getorgListAsync());
    }, [])
    const handleDelete = (id) => {
        dispatch(deleteOrgAsync(id));
        toast.success(mssg)
    }
    const orgCtrls = ["Email", "Name", "Phone", "Address", "Time", "Action"]
    return (
        <Layout>
            <AdminTable loading={loading} error={error} controls={orgCtrls} data={orgList} handleDelete={handleDelete} />
        </Layout>
    )
}

export default OrganisationList