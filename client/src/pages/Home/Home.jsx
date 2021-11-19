import CarDetails from '../../components/CarDetails/CarDetails'
import React from 'react';
import PageNav from '../../component/PageNav/PageNav'

function Home() {
    return (
        <div>
            <PageNav />
            <p>Welcome</p>
            <CarDetails></CarDetails>
        </div>
    )
}

export default Home
