import React from 'react'
import './Graph.scss'
import {Link} from 'react-router-dom';

function Graph() {
    return (
        <div className="graph-container">
            <div className="graph-inner-container">
                <p className="graph-inner-container__header">Kg CO2 SAVED</p>
                <div className="graph">
                    <div className="graph__elements">
                        <p className="graph__elements__number">20</p>
                        <div className="graph__elements__bar"></div>
                        <p className="graph__elements__text">S</p>
                    </div>
                    <div className="graph__elements">
                        <p className="graph__elements__number">20</p>
                        <div className="graph__elements__bar"></div>
                        <p className="graph__elements__text">S</p>
                    </div>
                    <div className="graph__elements">
                        <p className="graph__elements__number">20</p>
                        <div className="graph__elements__bar"></div>
                        <p className="graph__elements__text">M</p>
                    </div>
                    <div className="graph__elements">
                        <p className="graph__elements__number">20</p>
                        <div className="graph__elements__bar"></div>
                        <p className="graph__elements__text">T</p>
                    </div>
                    <div className="graph__elements">
                        <p className="graph__elements__number">20</p>
                        <div className="graph__elements__bar"></div>
                        <p className="graph__elements__text">W</p>
                    </div>
                    <div className="graph__elements">
                        <p className="graph__elements__number">20</p>
                        <div className="graph__elements__bar"></div>
                        <p className="graph__elements__text">T</p>
                    </div>
                    <div className="graph__elements">
                        <p className="graph__elements__number">20</p>
                        <div className="graph__elements__bar graph__elements__bar--dateNow"></div>
                        <p className="graph__elements__text">F</p>
                    </div>
                </div>
            </div>
            <Link className="graph-container__link" to="../gmusers/vision">
                <p className="graph-container__text">See How GM's doing</p>
            </Link>
            
        </div>
    )
}

export default Graph;