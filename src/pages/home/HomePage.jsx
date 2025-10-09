import './HomePage.css';
import Header from '../../components/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductsGrid from './ProductsGrid';

const HomePage = ({ cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>

      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
};
export default HomePage;
