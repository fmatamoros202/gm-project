import React from "react";
import "./BotttomNav.scss";
import Home from "../../assets/images/home.png";
import Search from "../../assets/images/search.png";
import Eco from "../../assets/images/eco.png";
import Home from "../../assets/images/profile.png";
import Bar from "../../assets/images/bar.png";

function BottomNav() {
	return (
		<>
			<section>
				<img src={Home} alt="home icon" />
				<img src={Search} alt="search icon" />
				<img src={Eco} alt="eco icon" />
				<img src={Profile} alt="profile icon" />
			</section>
			<div>
				<img src={Bar} alt="bar icon" />
			</div>
		</>
	);
}

export default BottomNav;
