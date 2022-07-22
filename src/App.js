import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/home';
import Contact from './Pages/Contact/contact';
import TopBar from './Components/Topbar/topBar';
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';


function App() {
  return (

    <Router>
      <TopBar />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;
