import React from 'react';
import './GlobalVision.scss';
import VisionBanner from '../../assets/images/VisionBanner.png'
import PageNav from "../../components/PageNav/PageNav";
import BottomNav from "../../components/BottomNav/BottomNav";

function GlobalVision() {
    return (
        <div className="vision">
            <PageNav />
			<img className="vision__banner" src={VisionBanner} alt="User Car"></img>
            <BottomNav></BottomNav>
        </div>
    );
}

export default GlobalVision;
