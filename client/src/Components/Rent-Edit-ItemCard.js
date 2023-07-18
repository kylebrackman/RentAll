import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UserContext } from '../Context/user';
import EditItemForm from './EditItemForm';

const RentEditItemCard = () => {
  const { id } = useParams();
  const { allItems, user, createRental, errors, deleteItem, editItem, resetErrors, loggedIn } = useContext(UserContext);
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
    // eslint-disable-next-line
  }, []);

  console.log(loggedIn)
  if (!item) {
    return <div>Item not found</div>;
  } else if (!loggedIn) {
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
              <h2>Signup to rent this item!</h2>
              <button className='sign-up-button'>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  else {
    return (
      // <div>
      //   <div>
      //     <div>
      //       <div>
      //         <h1>{item.name}</h1>
      //         <img src={item.image} alt={item.name}></img>
      //       </div>
      //       <div>
      //         <div >
      //           <h2>${item.price} Per Day</h2>
      //           <p>{item.condition}</p>
      //         </div>
      //         <p>{item.item_type}</p>
      //         <p>{item.description}</p>
      //         {errors}
      //         {item.owner_id !== user.id ? (
      //           <>
      //             <p>Start Date</p>
      //             <input type="date" value={startDate} onChange={handleStartDateChange} />
      //             <p>End Date</p>
      //             <input type="date" value={endDate} onChange={handleEndDateChange} />
      //             <hr />
      //             <button onClick={handleSubmit} className='login-button'>RENT</button>
      //           </>
      //         ) : (
      //           <div>
      //             {isEditing ? (
      //               <>
      //                 <EditItemForm item={item} handleEditItem={handleEditItem} />
      //               </>
      //             ) : (
      //               <>
      //                 <button onClick={handleEditButtonClick} className='login-button'>Edit</button>
      //                 <br />
      //                 <button onClick={() => deleteItem(item.id)} className='login-button'>Delete</button>
      //                 {errorList.length > 0 && <>{errorList}</>}
      //               </>
      //             )}
      //           </div>
      //         )}
      //       </div>
      //     </div>
      //   </div>
      // </div>

      <section class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-slate-950">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <img class="w-full" src={item.image} alt="Sunset in the mountains" />
          <div class="px-6 py-4 bg-gray-800">
            <div class="font-bold text-xl mb-2 text-white">{item.name}</div>
            <p class="text-gray-700 text-base">
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 bg-gray-800">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${item.price} Per Day</span>
            <br />
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rent</span>
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
      </section>
    );
  }
};

export default RentEditItemCard;