import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../layout/Main";
import SignUp from "../Pages/Signup/Signup";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/room/:id",
				element: (
					<PrivateRoutes>
						<RoomDetails />
					</PrivateRoutes>
				),
			},
		],
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/signup",
		element: <SignUp />,
	},
]);
