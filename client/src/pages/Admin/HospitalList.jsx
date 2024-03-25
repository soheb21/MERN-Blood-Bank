import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { selectadmin } from '../../redux/features/admin/adminSlice';
import { deleteHospitalAsync, getHospitalListAsync } from '../../redux/features/admin/adminAction';
import AdminTable from '../../components/Tables/AdminTable';
import { toast } from 'react-toastify';

const HospitalList = () => {
  const { loading, error, hospitalList, mssg } = useSelector(selectadmin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHospitalListAsync());
  }, [])
  const handleDelete = (id) => {
    dispatch(deleteHospitalAsync(id))
    toast.success(mssg)
  }
  const hospitalCtrls = ["Email", "Name", "Phone", "Address", "Time", "Action"]
  return (
    <Layout>
      <AdminTable loading={loading} error={error} controls={hospitalCtrls} data={hospitalList} handleDelete={handleDelete} />
    </Layout>
  )
}

export default HospitalList