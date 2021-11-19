import CarDetails from '../../components/CarDetails/CarDetails'
import React from 'react';
import PageNav from '../../components/PageNav/PageNav'
import CO2tracker from '../../components/CO2tracker/CO2tracker'

function Home() {
    return (
        <div>
            <PageNav />
            <p>Welcome</p>
            <CarDetails></CarDetails>
            <CO2tracker />
        </div>
    )
}

export default Home
