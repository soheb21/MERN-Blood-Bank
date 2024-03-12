import { selectUser } from "../../redux/features/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PubliComponent = ({ children }) => {
  const { user } = useSelector(selectUser)

  if (user) {
    return <Navigate to={"/"} replace={true} />
  }


  return children;
}

export default PubliComponent