import '../App.css';
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from '../Context/user';
import Navbar from './Navbar'
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

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
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
          <Route exact path="/users/:otherUserId/profiles/:id" element={<ProfileOtherUser />} />
          <Route exact path="/createProfile" element={<CreateProfile />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;