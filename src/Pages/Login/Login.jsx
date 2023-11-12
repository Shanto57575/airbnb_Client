import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import toast from "react-hot-toast";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "./../../Providers/AuthProviders";

const Login = () => {
	const { user, loading, setLoading, signIn, signInWithGoogle, resetPassword } =
		useContext(AuthContext);
	const [showPass, setShowPass] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	const emailRef = useRef();
	const handleSubmit = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		signIn(email, password)
			.then((result) => {
				console.log(result);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				setLoading(false);
				console.log(error.message);
				toast.error(error.message);
			});
	};

	const handleGoogleSign = () => {
		signInWithGoogle()
			.then((result) => {
				console.log(result);
				navigate(from, { replace: true });
			})
			.catch((error) => {
				setLoading(false);
				console.log(error.message);
				toast.error(error.message);
			});
	};

	const handleReset = () => {
		const email = emailRef.current.value;
		console.log(email);
		resetPassword(email)
			.then(() => {
				toast.success("Please check Your email");
				setLoading(false);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error.message);
				toast.error(error.message);
			});
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-900">
			<div className="flex flex-col max-w-md p-3 sm:p-10 bg-transparent text-white rounded-none md:border-x border-gray-100">
				<div className="mb-8 text-center">
					<h1 className="my-3 text-4xl font-bold font-serif">Sign In</h1>
					<p className="text-sm text-gray-400">Log in to access your account</p>
				</div>
				<form
					onSubmit={handleSubmit}
					noValidate=""
					action=""
					className="space-y-6 ng-untouched ng-pristine ng-valid"
				>
					<div className="space-y-4">
						<div>
							<label htmlFor="email" className="block mb-2 text-sm">
								Email address
							</label>
							<input
								ref={emailRef}
								type="email"
								name="email"
								id="email"
								required
								placeholder="Enter Your Email Here"
								className="w-full py-2 border-b rounded-none bg-transparent focus:outline-none text-white"
							/>
						</div>
						<div>
							<div className="flex justify-between">
								<label htmlFor="password" className="text-sm mb-2">
									Password
								</label>
							</div>
							<input
								type={showPass ? "text" : "password"}
								name="password"
								id="password"
								required
								placeholder="Enter Your Password"
								className="w-full py-2 border-b rounded-none bg-transparent focus:outline-none text-white"
							/>
							<div
								className="relative cursor-pointer"
								onClick={() => setShowPass(!showPass)}
							>
								{showPass ? (
									<AiFillEye
										className="text-white absolute right-3 bottom-2"
										title="hide"
										size={24}
									/>
								) : (
									<AiFillEyeInvisible
										className="text-white absolute right-3 bottom-2"
										title="show"
										size={24}
									/>
								)}
							</div>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="bg-rose-500 hover:bg-rose-600 duration-300 w-full rounded-md py-3 text-white"
						>
							{loading ? (
								<ImSpinner9 className="m-auto animate-spin" size={24} />
							) : (
								<span className="font-serif font-bold">Continue</span>
							)}
						</button>
					</div>
				</form>
				<div className="space-y-1">
					<button
						onClick={handleReset}
						className="text-xs hover:underline hover:text-rose-500 text-gray-400"
					>
						Forgot password?
					</button>
				</div>
				<div className="flex items-center pt-4 space-x-1">
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
					<p className="px-3 text-sm dark:text-gray-400">
						Login with social accounts
					</p>
					<div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
				</div>
				<div
					onClick={handleGoogleSign}
					className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 hover:bg-black hover:text-white duration-300 border-rounded cursor-pointer shadow-sm shadow-gray-900"
				>
					<FcGoogle size={32} />
					<p className="font-serif font-bold">Continue with Google</p>
				</div>
				<p className="px-6 text-sm text-center text-gray-400">
					Dont have an account yet?{" "}
					<Link
						to="/signup"
						className="hover:underline hover:text-rose-400 text-gray-100"
					>
						Sign up
					</Link>
					.
				</p>
			</div>
		</div>
	);
};

export default Login;
