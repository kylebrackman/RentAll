import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '../Context/user.tsx';
import Navbar from './Navbar.js';
import Login from './Login.js';
import Signup from './Signup.tsx';
import UploadItem from './UploadItem.tsx';
import AllItems from './AllItems.tsx';
import UserItems from './UserItems.tsx';
import RentEditItemCard from './Rent-Edit-ItemCard.tsx';
import RentalsPage from './RentalsPage.js';
import Profile from './Profile.js';
import CreateProfile from './CreateProfile.js';
import PastRentalsPage from './PastRentals.tsx';
import UpcomingRentalsPage from './UpcomingRentals.tsx';
import ProfileOtherUser from './ProfileOtherUser.js';
import MyRequests from './MyRequests.js';
import ConfirmRentalRequestMessage from './ConfirmRentalRequestMessage.tsx';
import Footer from './footer.tsx';
import About from './About.js';
import RentalRequestApprovalCard from './RentalRequestApprovalCard.tsx';
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';

const App: React.FC = () => {
  return (
    <div className="App flex flex-col min-h-screen relative">
      <UserProvider>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<AllItems />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/uploaditem" element={<UploadItem />} />
            <Route path="/allItems" element={<AllItems />} />
            <Route path="/myItems" element={<UserItems />} />
            <Route path="/item/:id" element={<RentEditItemCard />} />
            <Route path="/myRentals" element={<RentalsPage />} />
            <Route path="/pastRentals" element={<PastRentalsPage />} />
            <Route path="/upcomingRentals" element={<UpcomingRentalsPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profiles/:otherUserId" element={<ProfileOtherUser />} />
            <Route path="/createProfile" element={<CreateProfile />} />
            <Route path="/myRequests" element={<MyRequests />} />
            <Route path="/confirmRentalRequest/:id" element={<ConfirmRentalRequestMessage />} />
            <Route path="/about" element={<About />} />
            <Route path="/rentalRequest/:id" element={<RentalRequestApprovalCard />} />
          </Routes>
        </main>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
