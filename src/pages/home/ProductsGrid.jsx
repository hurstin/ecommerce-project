import Product from './product';

const ProductsGrid = ({ products, loadCart }) => {
  return (
    <div className="products-grid">
      {products.map((product) => {
        return (
          <Product key={product.id} loadCart={loadCart} product={product} />
        );
      })}
    </div>
  );
};
export default ProductsGrid;
