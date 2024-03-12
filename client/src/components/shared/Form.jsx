import React, { useState } from 'react'
import Input from './Input';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAsync, registerAsync } from '../../redux/features/auth/authAction';

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
    const RegisterInputData = [

        {
            id: 2,
            type: "text",
            name: "name",
            label: "Name",
            user: true

        }, {
            id: 3,
            type: "text",
            name: "organisationName",
            label: "Organisation Name",
            oraganisation: true

        }, {
            id: 4,
            type: "text",
            name: "hospitalName",
            label: "Hospital Name",
            hospital: true

        }, {
            id: 5,
            type: "text",
            name: "website",
            label: "Website",

        }, {
            id: 6,
            type: "text",
            name: "address",
            label: "Address",

        }, {
            id: 7,
            type: "number",
            name: "phone",
            label: "Phone No",

        }, {
            id: 8,
            type: "email",
            name: "email",
            label: "E-mail",

        }, {
            id: 9,
            type: "text",
            name: "password",
            label: "Password",

        },
    ]
    const loginInputData = [
        {
            id: 1,
            type: "email",
            name: "email",
            label: "E-mail",

        }, {
            id: 2,
            type: "text",
            name: "password",
            label: "Password",

        },
    ]
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
    return (
        <form onSubmit={
            formType === "register"
                ? (e) => handleRegisterSubmit(e)
                : (e) => handleLoginSubmit(e)
        }>
            <div className='h-full overflow-hidden'>

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
        </form>
    )
}

export default Form