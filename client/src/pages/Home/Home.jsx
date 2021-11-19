import CarDetails from "../../components/CarDetails/CarDetails";
import React from "react";
import PageNav from "../../components/PageNav/PageNav";
import CO2tracker from "../../components/CO2tracker/CO2tracker";
import BottomNav from "../../components/BottomNav/BottomNav";
import DayWeekMonthButtons from "../../components/DayWeekMonthButtons/DayWeekMonthButtons";

function Home() {
	return (
		<div>
			<PageNav />
			<CarDetails></CarDetails>
			<CO2tracker />
			<DayWeekMonthButtons />
			<BottomNav></BottomNav>
		</div>
	);
}

export default Home;
