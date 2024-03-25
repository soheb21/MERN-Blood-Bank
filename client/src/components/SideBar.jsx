import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { adminSideCtrls } from '../utils/data';

const SideBar = ({ isOpen, setIsOpen }) => {
    const { user } = useSelector(selectUser)
    const sideBarCtrls = [
        {
            title: "Inventory",
            icon: "fa-solid fa-warehouse",
            href: "/",
            role: "organisation"
        },
        {
            title: "Doner",
            icon: "fa-solid fa-hand-holding-medical",
            href: "/doner",
            role: "organisation"
        },
        {
            title: "Hospital",
            icon: "fa-solid fa-hospital",
            href: "/hospital",
            role: "organisation"

        },
        {
            title: "Organisation",
            icon: "fa-solid fa-sitemap",
            href: "/org",
            role: `${user.role === "doner" && "doner" || user.role === "hospital" && "hospital"}`

        },
        {
            title: "Consumer",
            icon: "fa-solid fa-hands-holding-child",
            href: "/consumer",
            role: "hospital"

        },
        {
            title: "Donation",
            icon: "fa-solid fa-person-shelter",
            href: "/donation",
            role: "doner"

        }
    ]




    const { pathname } = useLocation();
    const navigate = useNavigate();

    const sideBarFilter = sideBarCtrls.filter((i) => {
        if (i.role === user.role) {
            return i;
        }
    })


    const handleLogout = () => {
        localStorage.clear();
        toast.success('Logout Successfully')
        navigate("/login")
        window.location.reload();
    }



    return (
        <section className='bg-white text-purple-500 h-full relative py-4'>

            {/* logo */}
            <Link to={"/"} className='p-2 shadow-md w-fit rounded-full mx-auto'>Blood Bank <span className='text-red-400'><i className="fa-solid fa-hand-holding-droplet"></i></span></Link>

            <div className="md:text-xl text-lg py-3 my-2 w-full flex flex-col gap-4">
                {
                    user.role !== "admin"
                        ? sideBarFilter?.map((item, i) => (
                            <Link key={i} to={item.href} className={`flex w-full shadow-md  rounded-l-full  gap-2 p-4 ${item.href === pathname && 'text-white bg-purple-700'} `}>
                                <p><i className={item?.icon}></i></p>
                                <p>{item?.title}</p>
                            </Link>
                        ))
                        : adminSideCtrls?.map((item, i) => (
                            <Link key={i} to={item.href} className={`flex w-full shadow-md  rounded-l-full  gap-2 p-4 ${item.href === pathname && 'text-white bg-purple-700'} `}>
                                <p><i className={item?.icon}></i></p>
                                <p>{item?.title}</p>
                            </Link>
                        ))
                }
            </div>

            <button className='md:hidden absolute top-2 right-4' onClick={() => setIsOpen(!isOpen)} >
                <i className="fa-solid fa-xmark" />
            </button>
            <button onClick={handleLogout} className='shadow-md p-2 text-xl bg-purple-100 hover:bg-purple-500 hover:text-white transition ease-in-out  w-full absolute right-0 bottom-3' >Logout</button>
        </section>

    )
}

export default SideBar