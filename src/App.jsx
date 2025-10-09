import { Route, Routes } from 'react-router';
import './App.css';
import HomePage from './pages/home/HomePage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import OrdersPage from './pages/orders/OrdersPage';
import TrackingPage from './pages/TrackingPage';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get(
      'http://localhost:3000/api/cart-items?expand=product'
    );
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="/orders" element={<OrdersPage cart={cart} />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
