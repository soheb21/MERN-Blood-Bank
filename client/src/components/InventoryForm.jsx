import React, { useState } from 'react'
import Input from './shared/Input'
import { useDispatch, useSelector } from 'react-redux'
import { postInventoryAsync } from '../redux/features/inventory/inventoryAction'
import { selectUser } from '../redux/features/auth/authSlice'

const InventoryForm = ({ show, setShow }) => {
    const [bloodType, setBloodType] = useState("in")
    const [isBlood, setIsBlood] = useState("")
    const InventoryFormData = [
        {
            id: 1,
            label: `${bloodType === "in" ? "Doner Email" : " Hospital Email"}`,
            name: "email",
            type: "email",
            doner: true
        },
        {
            id: 3,
            label: "Quantity",
            name: "quantity",
            type: "number",
        },

    ]
    const initailFormDetails = {
        email: "",
        quantity: "",
    }
    const [inventoryForm, setTnventoryForm] = useState(initailFormDetails);
    const dispatch = useDispatch();
    const { user } = useSelector(selectUser)







    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postInventoryAsync({
            inventoryType: bloodType,
            bloodGroup: isBlood,
            quantity: inventoryForm.quantity,
            email: inventoryForm.email,
            organisaion: user._id,
        }))

    }

    return (
        <section className='relative mt-3 z-[4]  backdrop-blur-2xl bg-purple-200 h-96 md:w-96 w-full rounded-tl-none rounded-3xl'>
            <p className='absolute -top-5   bg-white w-fit p-2 rounded-full'>^</p>

            <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-2">
                <h1 className='bg-white w-fit mx-auto px-2 shadow-md text-purple-500 rounded-md'>Form</h1>

                <div className="flex gap-3 text-white">
                    <p className='bg-slate-500 px-2 rounded-md'>Blood Type</p>
                    <div className='flex gap-1'>
                        <input defaultChecked onChange={(e) => setBloodType(e.target.value)} value={"in"} name="inRadio" id='in' type="radio" />
                        <label htmlFor="in">In</label>
                    </div>
                    <div className='flex gap-1 '>
                        <input onChange={(e) => setBloodType(e.target.value)} value={"out"} name="inRadio" id='out' type="radio" />
                        <label htmlFor="out">OUT</label>
                    </div>

                </div>

                <Input controls={InventoryFormData} formData={inventoryForm} setFormData={setTnventoryForm} />

                <select onChange={(e) => setIsBlood(e.target.value)} className='text-purple-500 p-2 w-fit outline-none rounded-md' >
                    <option label='Select Blood' />
                    <option value={"O+"}>O+</option>
                    <option value={"O-"}>O-</option>
                    <option value={"A+"}>A+</option>
                    <option value={"B+"}>B+</option>
                    <option value={"AB+"}>AB+</option>
                </select>
                <div className="flex gap-2 w-full justify-end ">
                    <button onClick={() => setShow(!show)} className=' bg-red-500 w-fit rounded-md text-white p-2 mt-3'>close</button>
                    <button type='submit' className='bg-purple-500 w-fit rounded-md text-white p-2 mt-3'>Submit</button>

                </div>
            </form>
        </section>
    )
}

export default InventoryForm