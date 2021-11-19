import CarDetails from "../../components/CarDetails/CarDetails";
import React from "react";
import PageNav from "../../components/PageNav/PageNav";
import BottomNav from "../../components/BottomNav/BottomNav";

function Home() {
	return (
		<div>
			<PageNav />
			<p>Welcome</p>
			<CarDetails></CarDetails>
			<BottomNav></BottomNav>
		</div>
	);
}

export default Home;
