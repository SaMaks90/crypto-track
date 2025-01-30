import { useDispatch } from "react-redux";
import { AppDispatch } from "../stores/store";
import { signOut } from "../stores/middlewares/authThunk";
import { Navigate } from "react-router-dom";

const LogOut = () => {
  const dispatch = useDispatch<AppDispatch>();

  dispatch(signOut());

  return <Navigate to="/login" />;
};

export default LogOut;
