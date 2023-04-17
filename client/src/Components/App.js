import '../App.css';
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from '../context/user';
import Navbar from './Navbar'
import Home from './Home';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;