import React from "react";
import "./BottomNav.scss";
import HomeIcon from "../../assets/images/home.png";
import Search from "../../assets/images/search.png";
import Eco from "../../assets/images/another-eco.png";
import Profile from "../../assets/images/profile.png";
import Bar from "../../assets/images/bar.png";

function BottomNav() {
	return (
		<>
			<section className="bottom-nav">
				<img className="bottom-nav__icons" src={HomeIcon} alt="home icon" />
				<img
					className="bottom-nav__icons-search"
					src={Search}
					alt="search icon"
				/>
				<img className="bottom-nav__icons-eco" src={Eco} alt="eco icon" />
				<img className="bottom-nav__icons" src={Profile} alt="profile icon" />
			</section>
			<div className="bar">
				<img className="bar-button" src={Bar} alt="bar icon" />
			</div>
		</>
	);
}

export default BottomNav;
