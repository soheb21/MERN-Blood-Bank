import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUser } from "../../redux/features/auth/authSlice";

const ProtectedComponent = ({ children }) => {
    const { user } = useSelector(selectUser)
    if (!user) {
        return <Navigate to={"/login"} replace={true} />;
    }
    return children;


}

export default ProtectedComponent