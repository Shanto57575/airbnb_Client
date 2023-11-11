import { Link } from "react-router-dom";
import avatar from "../../../assets/images/placeholder.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const Avatar = () => {
	const { user } = useContext(AuthContext);
	return (
		<Link to="/">
			<img
				className="hidden md:block rounded-full"
				src={user && user.photoURL ? user.photoURL : avatar}
				alt="profile"
				width={30}
				height={30}
			/>
		</Link>
	);
};

export default Avatar;
