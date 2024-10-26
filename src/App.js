// import logo from './logo.svg';
import './App.css';
import About from './Compents/About';
import Elementor from './Compents/Elementor';
import Navbar from'./Compents/Navabr'
import { Routes, Route } from 'react-router-dom'; 
import Ourservices from './Compents/Ourservices';
import Review from './Compents/Review';
import Footer from './Compents/Footer';
import EFoam from './Compents/Foam'
import Services from './Pages/Services';
// import Portfolio from './Pages/Portfolio'; 
import Header from './Compents/Header';
import Contact from './Pages/Contact'; 
import Blog from './Pages/Blog';
function App(props) { 
  return (
    <>
    <Navbar />
<Routes>
        <Route path='/'element={
          <>
          <Header/> 
          <Elementor/>
          <About/>
          <Ourservices/>
          <Review/>
          <EFoam/>
          </> 
        }>
        </Route>        
      </Routes>
      <Routes>
        <Route path='/services'element={<Services/>}/>
        {/* <Route path='/Portfolio'element={<Portfolio/>}/> */}
        <Route path='/Contact'element={<Contact/>}/>
        <Route path='/Blog'element={<Blog/>}/>
      </Routes>
      <Footer/> 
    </> 
  );   
}

export default App; 

