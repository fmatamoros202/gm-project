import CarDetails from "../../components/CarDetails/CarDetails";
import React from "react";
import CO2tracker from "../../components/CO2tracker/CO2tracker";
import DayWeekMonthButtons from "../../components/DayWeekMonthButtons/DayWeekMonthButtons";
import BottomNav from "../../components/BottomNav/BottomNav";
import Graph from "../../components/Graph/Graph";
import PageNav from "../../components/PageNav/PageNav";

function Home() {
	return (
		<div>
			<PageNav />
			<CarDetails></CarDetails>
			<DayWeekMonthButtons />
			<CO2tracker />
			<Graph />
			<BottomNav></BottomNav>
		</div>
	);
}

export default Home;
