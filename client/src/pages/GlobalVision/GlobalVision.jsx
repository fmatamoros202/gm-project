import React from 'react';
import './GlobalVision.scss';
import VisionBanner from '../../assets/images/VisionBanner.png'
import PageNav from "../../components/PageNav/PageNav";
import BottomNav from "../../components/BottomNav/BottomNav";
import Vision2030 from '../../components/Vision2030/Vision2030';

function GlobalVision() {
    return (
        <div className="vision">
            <PageNav />
			<img className="vision__banner" src={VisionBanner} alt="User Car"></img>
            <Vision2030 />
            <BottomNav></BottomNav>
        </div>
    );
}

export default GlobalVision;
