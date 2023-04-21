import '../App.css';
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from '../context/user';
import Navbar from './Navbar'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import UploadItem from './UploadItem';
import AllItems from './AllItems';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/uploaditem" element={<UploadItem />} />
          <Route exact path="/allItems" element={<AllItems />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;