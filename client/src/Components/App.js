import '../App.css';
import { Route, Routes } from 'react-router-dom'
import { UserProvider } from '../context/user';
import Navbar from './Navbar'
import Home from './Home';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;