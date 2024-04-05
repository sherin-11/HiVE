import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import Routes component
import HomeScreen from './screens/Homescreen'; 
import Bookingscreen from './screens/Bookingscreen';// Correct import name
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes> {/* Wrap Routes around Route */}
          <Route path="/home" element={<HomeScreen />} /> 
          <Route path='/book/:roomid' exact element={<Bookingscreen />} />
          <Route path='/register' exact element={<Registerscreen />} />
          <Route path='/login' exact element={<Loginscreen />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
