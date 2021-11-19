import CarDetails from '../../components/CarDetails/CarDetails'
import React from 'react';
import PageNav from '../../component/PageNav/PageNav'
import DayWeekMonthButtons from '../../component/DayWeekMonthButtons/DayWeekMonthButtons'
function Home() {
    return (
        <div>
            <PageNav />
            <DayWeekMonthButtons />
            <p>Welcome</p>
            <CarDetails></CarDetails>
        </div>
    )
}

export default Home
