'use client'; // Ensure the component is a client-side component
import { FaCheckCircle, FaCircle } from 'react-icons/fa'; // Importing icons for selection
import Navbar from '../app/components/Navbar'; // Adjust if necessary
import React from 'react';
import Footer from '../app/components/Footer'; // Adjust the path based on your folder structure

// Define the Product type
type Product = {
  id: number;
  title: string;
  price: string;
  description: string;
  image: string;
};

// Products organized by category
const categories = [
  {
    name: 'Mobiles',
    products: [
      { id: 1, title: 'iPhone 14', price: '$999', description: 'Latest iPhone', image: '/images/iphone14.jpg' },
      { id: 2, title: 'Samsung Galaxy S21', price: '$899', description: 'Flagship Samsung phone', image: '/images/galaxys21.jpg' },
      { id: 3, title: 'OnePlus 9', price: '$799', description: 'OnePlus phone with fast charging', image: '/images/oneplus9.jpg' },
      { id: 4, title: 'Infinix', price: '$799', description: 'Infinix the ultimate champion', image: '/images/infinix14.jpg' }
    ]
  },
  {
    name: 'Groceries',
    products: [
      { id: 5, title: 'Organic Apples', price: '$3', description: 'Fresh and organic', image: '/images/apple.jpg' },
      { id: 6, title: 'Bananas', price: '$2', description: 'Sweet and ripe bananas', image: '/images/banana.jpg' },
      { id: 7, title: 'Carrots', price: '$1.5', description: 'Healthy and crunchy carrots', image: '/images/carrot.jpg' },
      { id: 8, title: 'Mango', price: '$1.5', description: 'Sweet and delicious mangoes', image: '/images/mango.jpg' },
    ]
  },
  {
    name: 'Gym Equipment',
    products: [
      { id: 9, title: 'Dumbbells', price: '$25', description: 'Adjustable dumbbells', image: '/images/dumbbells.jpg' },
      { id: 10, title: 'Treadmill', price: '$500', description: 'High-quality treadmill', image: '/images/treadmill.jpg' },
      { id: 11, title: 'Yoga Mat', price: '$15', description: 'Non-slip yoga mat', image: '/images/yogamat.jpg' },
      { id: 12, title: 'Knee Sleeve', price: '$15', description: 'Open patella knee sleeve', image: '/images/kneesleeve.jpg' },
    ]
  }
];

// ProductCard component with explicit type for 'product' prop
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div
      style={{
        border: '1px solid #E5E7EB',
        borderRadius: '12px',
        padding: '1rem',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '500px', // Ensure uniform card size
        boxSizing: 'border-box',
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '12px',
          maxHeight: '200px',
          objectFit: 'cover',
        }}
      />
      <h2
        style={{
          marginTop: '1rem',
          fontSize: '1.5rem',
          fontWeight: '700',
          color: '#333',
          minHeight: '50px',
          textTransform: 'capitalize',
          letterSpacing: '0.5px',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
      >
        {product.title}
      </h2>
      <p
        style={{
          marginTop: '0.5rem',
          color: '#777',
          fontSize: '1rem',
          fontStyle: 'italic',
          lineHeight: '1.6',
          height: '60px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
        }}
      >
        {product.description}
      </p>
      <p
        style={{
          marginTop: '0.5rem',
          fontWeight: 'bold',
          color: '#FF6347',
          fontSize: '1.125rem',
          textAlign: 'center',
          letterSpacing: '0.5px',
        }}
      >
        {product.price}
      </p>
      <div
        style={{
          marginTop: 'auto',
        }}
      >
        <button
          style={{
            backgroundColor: '#FF6347',
            color: 'white',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            fontSize: '1rem',
            width: '100%',
          }}
          onMouseEnter={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = '#FF4500';
          }}
          onMouseLeave={(e) => {
            const target = e.target as HTMLElement;
            target.style.backgroundColor = '#FF6347';
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// Sidebar Component for Filters
const Sidebar = () => (
  <div
    style={{
      width: '250px',
      padding: '1.5rem',
      backgroundColor: '#87CEEB', // Darker background for contrast
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      color: '#fff',
    }}
  >
    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#FF6347', marginBottom: '1rem' }}>
      Filter Products
    </h3>

    {/* Categories Filter */}
    <div style={{ marginBottom: '1rem' }}>
      <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#fff' }}>Categories</h4>
      <ul className="space-y-2"> {/* Space between items */}
        <li className="flex items-center">
          <FaCheckCircle style={{ color: '#FF6347', marginRight: '0.5rem' }} />
          Mobiles
        </li>
        <li className="flex items-center">
          <FaCheckCircle style={{ color: '#FF6347', marginRight: '0.5rem' }} />
          Groceries
        </li>
        <li className="flex items-center">
          <FaCheckCircle style={{ color: '#FF6347', marginRight: '0.5rem' }} />
          Gym Equipment
        </li>
      </ul>
    </div>

    {/* Color Filter */}
    <div style={{ marginBottom: '1rem' }}>
      <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#fff' }}>Color</h4>
      <ul style={{ paddingLeft: '1rem' }}>
        <li>
          <label>
            <FaCircle style={{ color: 'red', marginRight: '0.5rem' }} />
            Red
          </label>
        </li>
        <li>
          <label>
            <FaCircle style={{ color: 'blue', marginRight: '0.5rem' }} />
            Blue
          </label>
        </li>
        <li>
          <label>
            <FaCircle style={{ color: 'green', marginRight: '0.5rem' }} />
            Green
          </label>
        </li>
      </ul>
    </div>

    {/* Price Range Filter */}
    <div style={{ marginBottom: '1rem' }}>
      <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#fff' }}>Price Range</h4>
      <input
        type="range"
        min="0"
        max="1000"
        step="10"
        style={{ width: '100%' }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>$0</span>
        <span>$1000</span>
      </div>
    </div>
  </div>
);

// HomePage Component with Sidebar, Categories, and Footer
const HomePage = () => (
  <div className="flex flex-col p-4 sm:p-6 lg:p-8">
    <Navbar />

    {/* Hero Section with Background Image */}
    <div
      className="relative bg-cover bg-center h-64 sm:h-80 rounded-lg mb-8"
      style={{ backgroundImage: 'url(/images/hero-background.jpg)' }}
    >
      <h1 className="absolute text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-purple-800 top-1/2 transform -translate-y-1/2 w-full">
        BISMILLAH
      </h1>
    </div>

    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar for filters */}
      <div className="w-full lg:w-1/4 p-4 bg-blue-200 rounded-lg shadow-lg">
        <Sidebar />
      </div>

      {/* Main Content: Products and Categories */}
      <div className="flex-1">
        <div className="space-y-8 mt-4">
          {categories.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">{category.name}</h2>
              <div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
                style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}
              >
                {category.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
);

export default HomePage;
