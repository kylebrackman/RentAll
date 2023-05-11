import React, { useContext, useState} from 'react'
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
        } )
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
            <div>
                <form>
                    <h2>{item.name}</h2>
                    <h3>{item.item_type}</h3>
                    <h3>{item.condition}</h3>
                    <img src={item.image} className='item-image'></img>
                    <p>{item.description}</p>
                    <p>${item.price} Per Day</p>
                    <p>Start Date</p>
                    <input type="date" value={startDate} onChange={handleStartDateChange} />
                    <br />
                    <p>End Date</p>
                    <input type="date" value={endDate} onChange={handleEndDateChange} />
                    <br />
                    <button onClick={handleSubmit}>RENT</button>
                    <>
                        {errors}
                    </>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                <h2>{item.name}</h2>
                <h3>{item.item_type}</h3>
                <h3>{item.condition}</h3>
                <img src={item.image} className='item-image'></img>
                <p>{item.description}</p>
                <p>${item.price} Per Day</p>
                <div>EDIT</div>
            </div>
        )
    }
}

export default RentItemCard