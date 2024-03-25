import React, { useState } from 'react'
import Input from './Input';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAsync, registerAsync } from '../../redux/features/auth/authAction';
import { selectUser } from '../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { RegisterInputData, loginInputData } from '../../utils/data';

const Form = ({ formType }) => {
    const initialRegistration = {
        name: "",
        organisationName: "",
        hospitalName: "",
        website: "",
        address: "",
        phone: "",
        email: "",
        password: ""

    }
   
    const [register, setRegister] = useState(initialRegistration);
    const [role, setRole] = useState("doner");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialLogin = {
        email: "",
        password: ""
    }
    const [login, setLogin] = useState(initialLogin);


    const newArr = RegisterInputData.filter((i) => {
        if (role === "hospital" && !i.oraganisation && !i.user) {
            return i
        }
        else if (role === "organisation" && !i.hospital && !i.user) {
            return i
        }
        else if (role === "admin" && !i.hospital && !i.oraganisation) {
            return i
        }
        else if (role === "doner" && !i.hospital && !i.oraganisation) {
            return i
        }


    })
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        dispatch(registerAsync({ ...register, role }))
        navigate("/login")

    }
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsync({ ...login, role }))
        navigate("/")


    }
    const { error } = useSelector(selectUser)
    return (
        <form onSubmit={
            formType === "register"
                ? (e) => handleRegisterSubmit(e)
                : (e) => handleLoginSubmit(e)
        }>
            <div className='h-full overflow-hidden'>

                {error && error !== "Failed to verify token" ? toast.error(error) : ""}




                {/* radio bth */}

                <div className="flex gap-3 mb-2">
                    <div className="flex gap-2">
                        <label htmlFor="donerRadio">Doner</label>
                        <input type="radio" name='role' value={"doner"} onChange={(e) => setRole(e.target.value)} defaultChecked />
                    </div>
                    <div className="flex gap-2">
                        <label htmlFor="adminRadio">Admin</label>
                        <input type="radio" name='role' value={"admin"} onChange={(e) => setRole(e.target.value)} />
                    </div>
                    <div className="flex gap-2">
                        <label htmlFor="orgainsationRadio">Orgainsation</label>
                        <input type="radio" name='role' value={"organisation"} onChange={(e) => setRole(e.target.value)} />
                    </div>
                    <div className="flex gap-2">
                        <label htmlFor="hospitalRadio">Hospital</label>
                        <input type="radio" name='role' value={"hospital"} onChange={(e) => setRole(e.target.value)} />
                    </div>
                </div>

                {/* input fields */}

                <div className="overflow-auto h-full flex flex-col gap-2">
                    {
                        formType === "register"
                            ? <Input controls={newArr} formData={register} setFormData={setRegister} />
                            : <Input controls={loginInputData} formData={login} setFormData={setLogin} />

                    }
                    {
                        formType !== "register"
                            ? <p>Not Registered yet? <Link to={"/register"} className='ml-1 text-purple-500'>Register</Link></p>
                            : <p>Already have an account? <Link to={"/login"} className='ml-1 text-purple-500'>Login</Link></p>

                    }

                    <button type='submit' className='bg-purple-500 w-full text-white text-lg p-2 rounded-md' >{formType === "register" ? "Register" : "Login"}</button>
                </div>



            </div>
        </form >
    )
}

export default Form