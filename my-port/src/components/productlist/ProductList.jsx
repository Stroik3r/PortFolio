import "./productList.css"
import Product from '../product/Product'

const ProductList = () => {
  return <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Explore</h1>
                <p className="pl-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing 
                elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, 
                </p>
            </div>
            <div className="pl-list">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>;
};

export default ProductList;
