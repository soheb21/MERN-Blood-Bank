
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../../redux/features/auth/authSlice";
import { useEffect } from "react";
const ProtectedAdmin = ({ children }) => {
    const { user } = useSelector(selectUser)
    useEffect(()=>{
        
    },[])
    if (user && user.role === "admin") {
        return children;

    }
    return <Navigate to={"/login"} replace={true} />;

}

export default ProtectedAdmin