import React from 'react';
import PageNav from '../../component/PageNav/PageNav'
import DayWeekMonthButtons from '../../component/DayWeekMonthButtons/DayWeekMonthButtons'
function Home() {
    return (
        <div>
            <PageNav />
            <DayWeekMonthButtons />
            <p>Welcome</p>
        </div>
    )
}

export default Home
