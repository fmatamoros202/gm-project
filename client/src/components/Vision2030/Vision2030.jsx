import React from 'react';
import './Vision2030.scss';
import graphicon from '../../assets/images/graphicon.png'
function Vision2030() {
    return (
        <div className="vision">
            <div className="vision-text">
                <h2 className="vision-text__title">2030 Vision</h2>
                <h2 className="vision-text__number">60%</h2>
            </div>
            <div className="vision-bar__container">
                <div className="vision-bar__outside">
                    <div className="vision-bar__light-green">
                    </div>
                </div>
            </div>
            <div className="graph-icon__container"><img className="graph-icon" src={graphicon} alt="icons" /></div>
        </div>
    )
}

export default Vision2030
