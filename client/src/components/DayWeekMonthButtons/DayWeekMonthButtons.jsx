import React from 'react';
import './DayWeekMonthButtons.scss';
import calender from '../../assets/images/calender.png'

function DayWeekMonthButtons() {
    return (
        <div className="date">
            <div className="date-top">
                <button className="date-top__name"> DAY</button>
                <button className="date-top__name date-top__name-week"> WEEK</button>
                <button className="date-top__name"> MONTH</button>
            </div>
            <div className="date-fulldate">
                <img className="date-fulldate__calender-icon" src={calender} alt="calender icon" />
                <p className="date-fulldate__date">Nov.19th, 2021</p>
            </div>
        </div>
    )
}

export default DayWeekMonthButtons
