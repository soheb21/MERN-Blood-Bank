import { useSelector } from "react-redux"
import { selectUser } from "../redux/features/auth/authSlice"
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, setIsOpen }) => {
    const { user } = useSelector(selectUser);

    return (
        <div className='bg-purple-900 text-white h-full flex items-center relative justify-end px-2'>
            <div className="flex gap-2 md:text-xl ">
                <p className="font-extrabold ">Welcome</p>
                <p className="font-thin"><span className="text-red-500 font-semibold mr-2"><i className="fa-solid fa-user"></i></span>{user?.name.toUpperCase() || user?.organisationName.slice(0, 4).toUpperCase() || user?.hospitalName.toUpperCase()}</p>
                <p className="bg-slate-400 text-sm h-fit px-1 font-bold">{user?.role}</p>
                {user.role === "organisation" && <Link to={"/analytics"} className="bg-orange-400 text-white shadow-md px-1  rounded-md">Analytics</Link>}
            </div>

            <button className='md:hidden absolute left-2' onClick={() => setIsOpen(!isOpen)} > <i className="fa-solid fa-bars" /></button>
        </div>
    )
}

export default Navbar