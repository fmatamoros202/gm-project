import React from 'react'
import carImage from '../../assets/images/car.png'
import './CarDetails.scss'

function CarDetails() {
    return (
        <div className="cardetails">
            <img className="cardetails__image" src={carImage} alt="User Car"></img>
            <h2 className="cardetails__name">Ben's XT4</h2>
            <div className="cardetails__date-and-km">
                <div className="cardetails__date">
                    <p className="cardetails__date-purchased">Feb 14th, 2021</p>
                    <p className="cardetails__date-purchased-label">Purchase Date</p>
                </div>
                <div className="cardetails__km">
                    <p className='cardetails__km-left'>172</p>
                    <p className='cardetails__km-left-label'>KM</p>
                </div>
            </div>
        </div>
    )
}

export default CarDetails
