import React, { useState, useEffect} from 'react';
import "./feature.css";

const Feature = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { cartItems, setCartItems} = useState([]);

  const handleCartItem = (product)  => {
    setCartItems([
        ...cartItems, product
    ])
  }

  useEffect(() => {
    // Simulating API fetch (replace with your API call)
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };


  return (
    <div className="feature">
      <div className="container grid">
        <div className="header">
          <div className="heading">
            <h2 className='feat-h2'>BEST OFFERS</h2>
            <h1 className='feat-h1'>Featured</h1>
          </div>
          <div className="selector">
            <button className={`feat ${selectedCategory === "women's clothing" ? "highlight" : ''}`} onClick={() => filterByCategory("women's clothing")}>Women</button>
            <button className={`feat ${selectedCategory === "men's clothing" ? "highlight" : ''}`} onClick={() => filterByCategory("men's clothing")}>Men</button>
            <button className={`feat ${selectedCategory === "electronics" ? "highlight" : ''}`} onClick={() => filterByCategory("electronics")}>Electronics</button>
          </div>
        </div>
        <div className="card-coll">
          {products.map((product, index) => {
            //console.log(product);
            if (selectedCategory === '' || product.category === selectedCategory) {
              return (
                <div className="card" key={index}>
                  <img src={product.image} alt="" className='card-img'/>
                  <h3 className='feat-h4'>{product.title}</h3>
                  <div className="add">
                     <p className="feat-p2">{`₹${product.price}`}</p>
                        <button className='feat-button' onClick={() => handleCartItem(product)}>Add to Cart</button>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );

};

export default Feature;