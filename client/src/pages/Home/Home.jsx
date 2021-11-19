import CarDetails from '../../components/CarDetails/CarDetails'
import React from 'react';
import PageNav from '../../components/PageNav/PageNav'

function Home() {
    return (
        <div>
            <PageNav />
            <CarDetails></CarDetails>
        </div>
    )
}

export default Home
