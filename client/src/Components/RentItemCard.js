import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { UserContext } from '../Context/user';

const RentItemCard = () => {

    const { id } = useParams()
    const { allItems, user, createRental, errors } = useContext(UserContext)
    const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10)); // set initial value to today's date
    const [endDate, setEndDate] = useState(new Date().toISOString().substring(0, 10)); // set initial value to today's date

    const navigate = useNavigate()

    const item = allItems.find(i => i.id === parseInt(id))

    console.log(item)

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    }

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createRental({
            start_date: startDate,
            end_date: endDate,
            renter_id: user.id,
            item_id: item.id,
            owner_id: item.owner_id
        })
        if (!errors) {
            navigate('/myRentals')
        }
    }

    if (!item) {
        return (
            <div>
                Item not found
            </div>
        )
    } if (item && item.owner_id !== user.id) {
        return (
            <div className='rent-item-card-container'>
                <div className='rent-item-card'>
                    <div >
                        <div>
                            <h1 className="item-card-name">{item.name}</h1>
                            <img src={item.image} className='item-image' alt={item.name}></img>
                        </div>
                        <div className='rent-item-card-info-box'>
                            <div className='price-container'>
                                <h2>${item.price} Per Day</h2>
                                <p>{item.condition}</p>
                            </div>
                            <p>{item.description}</p>
                            <p>Start Date</p>
                            <input type="date" value={startDate} onChange={handleStartDateChange} />
                            <p>End Date</p>
                            <input type="date" value={endDate} onChange={handleEndDateChange} />
                            <hr />
                            <button onClick={handleSubmit} className='rent-button'>RENT</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='rent-item-card-container'>
                <div className='rent-item-card'>
                    <div >
                        <div>
                            <h1 className="item-card-name">{item.name}</h1>
                            <img src={item.image} className='item-image' alt={item.name}></img>
                        </div>
                        <div className='rent-item-card-info-box'>
                            <div className='price-container'>
                                <h2>${item.price} Per Day</h2>
                                <p>{item.condition}</p>
                            </div>
                            <p>{item.description}</p>
                            <button onClick={handleSubmit} className='rent-button'>edit</button>
                            <button onClick={handleSubmit} className='rent-button'>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RentItemCard