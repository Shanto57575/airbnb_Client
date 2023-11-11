import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AuthProvider>
		<Toaster />
		<RouterProvider router={router} />
	</AuthProvider>
);
