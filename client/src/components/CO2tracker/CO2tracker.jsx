import React from 'react'
import './CO2tracker.scss'

function CO2tracker() {
    return (
        <div className="container">
            <div className="inner-container">
                <div className="relative-container">
                    <div className="content-box">
                        <p className="content-box__header">CO2 Saved</p>
                        <p className="content-box__main">24<span className="content-box__main__inner">KG</span></p>
                    </div>
                    <div className="content-box">
                        <p className="content-box__header">CO2 Saved</p>
                        <p className="content-box__main">24<span className="content-box__main__inner">L</span></p>
                    </div>
                </div>
            </div>
            <p className="container__text">Estimated Savings $30</p>
            
        </div>
    )
}

export default CO2tracker;