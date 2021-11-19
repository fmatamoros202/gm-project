import CarDetails from "../../components/CarDetails/CarDetails";
import React from "react";
import PageNav from "../../components/PageNav/PageNav";
import CO2tracker from "../../components/CO2tracker/CO2tracker";
import BottomNav from "../../components/BottomNav/BottomNav";
import DayWeekMonthButtons from "../../components/DayWeekMonthButtons/DayWeekMonthButtons";
import Vision2030 from "../../components/Vision2030/Vision2030";

function Home() {
	return (
		<div>
			<PageNav />
			<CarDetails></CarDetails>
			<DayWeekMonthButtons />
            <CO2tracker />
			<Vision2030 />
			<BottomNav></BottomNav>
		</div>
	);
}

export default Home;
