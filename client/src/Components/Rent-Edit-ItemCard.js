import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Context/user';
import EditItemForm from './EditItemForm';

const RentEditItemCard = () => {
  const { id } = useParams();
  const { allItems, user, createRental, errors, deleteItem, editItem, resetErrors } = useContext(UserContext);
  const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10));
  const [endDate, setEndDate] = useState(new Date().toISOString().substring(0, 10));
  const [isEditing, setIsEditing] = useState(false);

  const item = allItems.find((i) => i.id === parseInt(id));

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const errorList = errors.map((error) => (
    <li key={error.index}>{error}</li>
  ));


  const handleSubmit = (e) => {
    e.preventDefault();
    createRental({
      start_date: startDate,
      end_date: endDate,
      renter_id: user.id,
      item_id: item.id,
      owner_id: item.owner_id,
    });
  };

  const handleEditItem = (editedItem) => {
    editItem(editedItem);
    setIsEditing(false);
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    resetErrors();
  }, []);


  if (!item) {
    return <div>Item not found</div>;
  } else {
    return (
      <div className='rent-item-card-container'>
        <div className='rent-item-card'>
          <div>
            <div>
              <h1 className="item-card-name">{item.name}</h1>
              <img src={item.image} className='item-image' alt={item.name}></img>
            </div>
            <div className='rent-item-card-info-box'>
              <div className='price-container'>
                <h2>${item.price} Per Day</h2>
                <p>{item.condition}</p>
              </div>
              <p>{item.item_type}</p>
              <p>{item.description}</p>
              {item.owner_id !== user.id ? (
                <>
                  <p>Start Date</p>
                  <input type="date" value={startDate} onChange={handleStartDateChange} />
                  <p>End Date</p>
                  <input type="date" value={endDate} onChange={handleEndDateChange} />
                  <hr />
                  <button onClick={handleSubmit} className='login-button'>RENT</button>
                </>
              ) : (
                <div>
                  {isEditing ? (
                    <>
                      <EditItemForm item={item} handleEditItem={handleEditItem} />
                    </>
                  ) : (
                    <>
                      <button onClick={handleEditButtonClick} className='login-button'>Edit</button>
                      <br />
                      <button onClick={() => deleteItem(item.id)} className='login-button'>Delete</button>
                      {errorList.length > 0 && <>{errorList}</>}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default RentEditItemCard;