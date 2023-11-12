import { useEffect, useState } from "react";
import Container from "../shared/Container";
import Card from "./Card";
import Loader from "../shared/Loader";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";

const Rooms = () => {
	const [rooms, setRooms] = useState();
	const [loading, setLoading] = useState(false);
	const [params, setParams] = useSearchParams();
	const category = params.get("category");
	console.log(params);

	useEffect(() => {
		setLoading(true);
		fetch("/public/Rooms.json")
			.then((res) => res.json())
			.then((data) => {
				if (category) {
					const filteredCategory = data?.filter(
						(room) => room.category === category
					);
					setRooms(filteredCategory);
				} else {
					setRooms(data);
				}
				setLoading(false);
			});
	}, [category]);

	if (loading) {
		return <Loader />;
	}

	return (
		<Container>
			{rooms && rooms.length > 0 ? (
				<div className="col-span-1 cursor-pointer group">
					<div className="flex flex-col gap-2 w-full">
						<div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
							{rooms?.map((room, index) => (
								<Card key={index} room={room} />
							))}
						</div>
					</div>
				</div>
			) : (
				<div className="pt-12">
					<Heading
						title="No Rooms available In this Category"
						subtitle="Please select Other Categories"
						center={true}
					/>
				</div>
			)}
		</Container>
	);
};

export default Rooms;
