import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '../Context/user';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import UploadItem from './UploadItem';
import AllItems from './AllItems';
import UserItems from './UserItems';
import RentEditItemCard from './Rent-Edit-ItemCard';
import RentalsPage from './RentalsPage';
import Profile from './Profile';
import CreateProfile from './CreateProfile';
import PastRentalsPage from './PastRentals';
import UpcomingRentalsPage from './UpcomingRentals';
import ProfileOtherUser from './ProfileOtherUser';
import MyRequests from './MyRequests';
import ConfirmRentalRequestMessage from './ConfirmRentalRequestMessage';
import Footer from './footer';
import About from './About';

function App() {
  return (
    <div className="App flex flex-col min-h-screen relative">
      <UserProvider>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<AllItems />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/uploaditem" element={<UploadItem />} />
            <Route exact path="/allItems" element={<AllItems />} />
            <Route exact path="/myItems" element={<UserItems />} />
            <Route exact path="/item/:id" element={<RentEditItemCard />} />
            <Route exact path="/myRentals" element={<RentalsPage />} />
            <Route exact path="/pastRentals" element={<PastRentalsPage />} />
            <Route exact path="/upcomingRentals" element={<UpcomingRentalsPage />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/profiles/:otherUserId" element={<ProfileOtherUser />} />
            <Route exact path="/createProfile" element={<CreateProfile />} />
            <Route exact path="/myRequests" element={<MyRequests />} />
            <Route exact path="/confirmRentalRequest/:id" element={<ConfirmRentalRequestMessage />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
          </main>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
