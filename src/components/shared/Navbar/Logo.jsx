import { Link } from "react-router-dom";
import logo from "../../../assets/images/airbnb.png";

const Logo = () => {
	return (
		<Link to="/">
			<img
				className="hidden md:block"
				src={logo}
				alt="logo"
				width={120}
				height={120}
			/>
		</Link>
	);
};

export default Logo;
