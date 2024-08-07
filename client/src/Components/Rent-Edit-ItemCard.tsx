import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { UserContext, EditableItem } from '../Context/user.tsx';
import EditItemForm from './EditItemForm.tsx';

const RentEditItemCard = () => {
  const { id } = useParams();
  const { allItems, user, errors, deleteItem, editItem, resetErrors, loggedIn, createRentalRequest, createCheckoutSession } = useContext(UserContext);
  const [startDate, setStartDate] = useState(new Date().toISOString().substring(0, 10));
  const [endDate, setEndDate] = useState(new Date().toISOString().substring(0, 10));
  const [isEditing, setIsEditing] = useState(false);


  const navigate = useNavigate();
  const item = allItems.find((i) => i.id === parseInt(id as string || ''));
  console.log(item)

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  const errorList = errors.map((error) => (
    <li style={{ color: "white" }}>{error}</li>
  ));


  const handleSubmit = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (item) {
      const rentalRequestData = {
        start_date: startDate,
        end_date: endDate,
        renter_id: user.id,
        item_id: item.id,
        owner_id: item.owner_id,
      };
      console.log("card", rentalRequestData)
      createCheckoutSession(rentalRequestData);
      // createRentalRequest(rentalRequestData);
      if (errors.length === 0) {
        navigate(`/confirmRentalRequest/${item.id}`);
      }
    }
  };

  const handleEditItem = (editedItem: EditableItem)=> {
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

  if (!item) {
    return <div>Item not found</div>;
  } else if (!loggedIn) {
    return (
      <section className="flex flex-col items-center px-6 py-8 bg-slate-950 min-h-screen">
        <div className="rounded shadow-lg md:w-2/6 sm:w-3/6 min-h-screen">
          <img className="w-full" src={item.image} alt="Sunset in the mountains" />
          <div className="px-6 py-4 bg-gray-800">
            <div className="font-bold text-xl mb-2 text-white">{item.name}</div>
            <p className="text-gray-700 text-base">
            </p>
          </div>
          <div className="px-6 pt-4 pb-2 bg-gray-800" style={{ color: "white" }}>
            <p style={{ color: "white" }}>
              {item.description}
            </p>
            <br />
            <span className="inline-block bg-lime-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">${item.price} Per Day</span>
            <br />
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.condition}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.item_type}</span>
            <br />

            <h2>
              <span onClick={() => navigate('/signup')} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold text-gray-700 mr-2 mb-2">
                Sign Up</span> to rent this item!
            </h2>
          </div>
        </div>
      </section>
    )
  }

  else {
    return (
      <section className="flex flex-col items-center px-6 py-8 bg-slate-950 min-h-screen">
        <div className="rounded-lg shadow-lg md:w-2/6 sm:w-3/6">
          <img className="w-full rounded-lg" src={item.image} alt="Sunset in the mountains" />
          <div className=" rounded-lg px-6 py-4 bg-gray-800 h-auto w-aut flex items-center justify-between">
            <div className="font-bold text-xl mb-2 text-white">{item.name}</div>
            <Link to={`/profiles/${item?.owner_id}`}>
              <p className="text-white text-base">
                Owner: {item.owner_first_name} {item.owner_last_name}
              </p>
            </Link>
          </div>
          <div className="rounded-lg px-6 pt-4 pb-2 bg-gray-800" style={{ color: "white" }}>
            <p style={{ color: "white" }}>
              {item.description}
            </p>
            <span className="inline-block bg-lime-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">${item.price} Per Day</span>
            <br />
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.condition}</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.item_type}</span>
            <p>
              {/* Look into this later.
              <button onClick={() => createCheckoutSession(orderId)}>
                Checkout
              </button> */}
            </p>
            {item.owner_id !== user.id ? (
              <>
                <p>Start Date</p>
                <input type="date" value={startDate} onChange={handleStartDateChange} style={{ color: "black" }} />
                <p>End Date</p>
                <input type="date" value={endDate} onChange={handleEndDateChange} style={{ color: "black" }} />
                <hr />
                <br />
                <span onClick={handleSubmit} className="inline-block bg-lime-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">RENT</span>
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
                    <span className="inline-block bg-yellow-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" onClick={handleEditButtonClick}>Edit</span>
                    <br />
                    <span className="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2" onClick={() => deleteItem(item.id)}>Delete</span>
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