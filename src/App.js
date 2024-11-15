import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProductList from './components/ProductListPage/ProductList';
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/ProductListPage/Filter';
import Sort from './components/ProductListPage/Sort';
import Loading from './components/ProductListPage/Loading';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [sortBy, setSortBy] = useState('price');

  // Fetch products from API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  // Filter products based on search query
  useEffect(() => {
    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  // Filter products based on category
  useEffect(() => {
    if (categoryFilter) {
      const filtered = products.filter(product => product.category === categoryFilter);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [categoryFilter, products]);

  // Sort products based on price
  useEffect(() => {
    const sorted = [...filteredProducts].sort((a, b) => {
      return sortBy === 'price' 
        ? a.price - b.price 
        : b.price - a.price;
    });
    setFilteredProducts(sorted);
  }, [sortBy, filteredProducts]);

  return (
    <div className="App">
      {loading ? <Loading /> : null}
      <SearchBar setSearchQuery={setSearchQuery} />
      <Filter setCategoryFilter={setCategoryFilter} />
      <Sort setSortBy={setSortBy} />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
