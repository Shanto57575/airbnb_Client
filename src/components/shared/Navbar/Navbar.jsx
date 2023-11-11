import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "./Menu";

const Navbar = () => {
	return (
		<div className="fixed w-full mx-auto bg-white z-10 shadow-md">
			<div className="py-4 border-b">
				<Container>
					<div className="flex flex-row items-center justify-between md:gap-0">
						<Logo />
						<Search />
						<Menu />
					</div>
				</Container>
			</div>
		</div>
	);
};

export default Navbar;
