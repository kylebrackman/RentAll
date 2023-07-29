import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { UserContext } from '../Context/user';
import EditItemForm from './EditItemForm';

const RentEditItemCard = () => {
  const { id } = useParams();
  const { allItems, user, createRental, errors, deleteItem, editItem, resetErrors, loggedIn } = useContext(UserContext);
  const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10));
  const [endDate, setEndDate] = useState(new Date().toISOString().substring(0, 10));
  const [isEditing, setIsEditing] = useState(false);


  const navigate = useNavigate();
  const item = allItems.find((i) => i.id === parseInt(id));


  console.log(item)


  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const errorList = errors.map((error) => (
    <li key={error.index} style={{ color: "white" }}>{error}</li>
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
      <section class="flex flex-col items-center px-6 py-8 mx-auto bg-slate-950">
        <div class="rounded shadow-lg md:w-3/6 sm:w-3/6">
          <img class="w-full" src={item.image} alt="Sunset in the mountains" />
          <div class="px-6 py-4 bg-gray-800">
            <div class="font-bold text-xl mb-2 text-white">{item.name}</div>
            <p class="text-gray-700 text-base">
            </p>
          </div>
          <div class="px-6 pt-4 pb-2 bg-gray-800" style={{ color: "white" }}>
            <p style={{ color: "white" }}>
              {item.description}
            </p>
            <br />
            <span class="inline-block bg-lime-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">${item.price} Per Day</span>
            <br />
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.condition}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.item_type}</span>
            <br />

            <h2>
              <span onClick={() => navigate('/signup')} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">
                Sign Up</span> to rent this item!
            </h2>
          </div>
        </div>
      </section>
    )
  }

  else {
    return (
      <section class="flex flex-col items-center px-6 py-8 mx-auto bg-slate-950">
        <div class="rounded shadow-lg md:w-3/6 sm:w-3/6">
          <img class="w-full" src={item.image} alt="Sunset in the mountains" />
          <div class="px-6 py-4 bg-gray-800 h-auto w-aut flex items-center justify-between">
            <div class="font-bold text-xl mb-2 text-white">{item.name}</div>
            <Link >
              <p class="text-white text-base">
                Owner: {item.owner_first_name} {item.owner_last_name}
              </p>
            </Link>
          </div>
          <div class="px-6 pt-4 pb-2 bg-gray-800" style={{ color: "white" }}>
            <p style={{ color: "white" }}>
              {item.description}
            </p>
            <br />
            <span class="inline-block bg-lime-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">${item.price} Per Day</span>
            <br />
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.condition}</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.item_type}</span>
            {item.owner_id !== user.id ? (
              <>
                <p>Start Date</p>
                <input type="date" value={startDate} onChange={handleStartDateChange} style={{ color: "black" }} />
                <p>End Date</p>
                <input type="date" value={endDate} onChange={handleEndDateChange} style={{ color: "black" }} />
                <hr />
                <br />
                <span onClick={handleSubmit} type="submit" class="inline-block bg-lime-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2" >RENT</span>
                {errorList.length > 0 && <>{errorList}</>}
              </>
            ) : (
              <div>
                {isEditing ? (
                  <>
                    <EditItemForm item={item} handleEditItem={handleEditItem} />
                  </>
                ) : (
                  <>
                    <span class="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleEditButtonClick}>Edit</span>
                    <br />
                    <span class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2" onClick={() => deleteItem(item.id)}>Delete</span>
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