import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import './index.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    minRating: '',
    keyword: '',
    availability: false,
    brand: '',
    size: '',
    showFilters: false, // Added state for showing filters
  });

  const filterOptions = [
    { name: "idealFor", label: "Ideal For", options: ["Men", "Women", "Baby & Kids"] },
    { name: "occasion", label: "Occasion", options: ["Casual", "Formal"] },
    { name: "work", label: "Work", options: ["Casual", "Formal"] },
    { name: "fabric", label: "Fabric", options: ["Cotton", "Polyester"] },
    { name: "segment", label: "Segment", options: ["Men's", "Women's"] },
    { name: "suitableFor", label: "Suitable For", options: ["Indoor", "Outdoor"] },
    { name: "rawMaterials", label: "Raw Materials", options: ["Leather", "Plastic"] },
    { name: "pattern", label: "Pattern", options: ["Stripes", "Polka Dots"] }
  ];

  const [noProductsFound, setNoProductsFound] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data); 
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    
    let filtered = products.filter(product => {
      

      return true; 
    });

    setFilteredProducts(filtered);
    setNoProductsFound(filtered.length === 0);
  }, [products, filters]);

  
  const toggleFilters = () => {
    setFilters({ ...filters, showFilters: !filters.showFilters });
  };

  
  const handleCheckboxChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  
  const handleSelectChange = (name) => {
    setFilters({ ...filters, [name]: !filters[name] });
  };

  return (
    <div className="product-grid">
      <h1>DISCOVER OUR PRODUCTS</h1>
      <p className='description'>Explore endless possibilities with our diverse range of products, curated just for you. Discover convenience and quality in every click with our e-commerce offerings</p>
      <div className="options">
        <div className='sort-and-count'>
          <p className='product-count'>{filteredProducts.length} ITEMS</p>
          <p className='show-and-hide-filter' onClick={toggleFilters}>
            {filters.showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
          </p>
        </div> 
        <select>
          <option disabled selected>RECOMMENDED:</option>
          <option value="newest">Newest</option>
          <option value="popular">Popular</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="lowToHigh">Price: Low to High</option>
        </select>
      </div>
      <div className='sort-and-product'>
        <div className={filters.showFilters ? "filters show" : "filters"}>
         
          <div>
         <input type="checkbox" id="customizable" name="customizable"/>
         <label for="customizable">CUSTOMIZABLE</label>
         </div>
          {filterOptions.map(({ name, label, options }) => (
            <div key={name} className='left-sort-options' >
              
              <p className='select-option'>{label}<select onClick={() => handleSelectChange(name)}></select></p>
              <p>All</p>
              {filters[name] && (
                <div className="checkbox-options">
                  <span className='unselect-all-option'>Unselect all</span>
                  {options.map(option => (
                    <div key={option} className="checkbox-option">
                      <input
                      className='checkbox'
                        type="checkbox"
                        id={option}
                        name={name}
                        value={option}
                        onChange={(e) => handleCheckboxChange(name, e.target.value)}
                      />
                      <label htmlFor={option}>{option}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div> 
          </div>
        ) : (
          noProductsFound ? (
            <div className="no-products">
              <p>No products found with the selected filters.</p>
            </div>
          ) : (
            <div className="products-list">
              
              {filteredProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );  
};

export default ProductGrid;