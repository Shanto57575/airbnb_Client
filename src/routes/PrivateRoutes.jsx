import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Providers/AuthProviders";
import Loader from "../components/shared/Loader";

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return <Loader />;
	}

	if (user) {
		return children;
	}
	return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
