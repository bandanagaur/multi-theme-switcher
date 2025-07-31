import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain mb-2" />
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.description.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;