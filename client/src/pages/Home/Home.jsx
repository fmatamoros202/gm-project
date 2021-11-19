import CarDetails from "../../components/CarDetails/CarDetails";
import React from "react";
import CO2tracker from "../../components/CO2tracker/CO2tracker";
import DayWeekMonthButtons from "../../components/DayWeekMonthButtons/DayWeekMonthButtons";
import PageNav from "../../components/PageNav/PageNav";
import BottomNav from "../../components/BottomNav/BottomNav";

function Home() {
	return (
		<div>
            <PageNav />
			<CarDetails></CarDetails>
			<DayWeekMonthButtons />
            <CO2tracker />
            <BottomNav></BottomNav>
		</div>
	);
}

export default Home;
