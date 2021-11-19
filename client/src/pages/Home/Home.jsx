import CarDetails from '../../components/CarDetails/CarDetails'
import React from 'react';
import PageNav from '../../components/PageNav/PageNav'
import DayWeekMonthButtons from '../../components/DayWeekMonthButtons/DayWeekMonthButtons'
function Home() {
    return (
        <div>
            <PageNav />
            <CarDetails></CarDetails>
            <DayWeekMonthButtons />
        </div>
    )
}

export default Home
