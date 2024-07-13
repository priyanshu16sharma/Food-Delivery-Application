import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//pages
import HomePage from './Pages/HomePage.page';
import Checkout from './Pages/Checkout.page';
import RedirectRestaurant from './Pages/Restaurant.page';
import GoogleAuth from './Pages/GoogleAuth.page';
//components
import Overview from './Components/Restaurant/Overview';
import OrderOnline from './Components/Restaurant/Order-Online';
import Reviews from './Components/Restaurant/Reviews';
import Menu from './Components/Restaurant/Menu';
import Photos from './Components/Restaurant/Photos';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="/delivery" />} />
        <Route path='/:type' element={<HomePage />} />
        <Route path='/restaurant/:id' element={<RedirectRestaurant />}>
          <Route path='/restaurant/:id/order-online' element={<OrderOnline />} />
          <Route path='/restaurant/:id/overview' element={<Overview />} />

          <Route path='/restaurant/:id/reviews' element={<Reviews/>} />
          <Route path='/restaurant/:id/menu' element={<Menu />} />
          <Route path='/restaurant/:id/photos' element={<Photos />} />
        </Route>
        <Route path='/google/:token' element={<GoogleAuth />} />
        <Route path='/checkout/orders' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
