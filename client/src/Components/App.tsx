import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '../Context/user.tsx';
import Navbar from './Navbar.js';
import Login from './Login.js';
import Signup from './Signup.js';
import UploadItem from './UploadItem.js';
import AllItems from './AllItems.tsx';
import UserItems from './UserItems.js';
import RentEditItemCard from './Rent-Edit-ItemCard.js';
import RentalsPage from './RentalsPage.js';
import Profile from './Profile.js';
import CreateProfile from './CreateProfile.js';
import PastRentalsPage from './PastRentals.js';
import UpcomingRentalsPage from './UpcomingRentals.js';
import ProfileOtherUser from './ProfileOtherUser.js';
import MyRequests from './MyRequests.js';
import ConfirmRentalRequestMessage from './ConfirmRentalRequestMessage.tsx';
import Footer from './footer.js';
import About from './About.js';
import RentalRequestApprovalCard from './RentalRequestApprovalCard.js';
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
            <Route exact path="/rentalRequest/:id" element={<RentalRequestApprovalCard />} />
          </Routes>
        </main>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
