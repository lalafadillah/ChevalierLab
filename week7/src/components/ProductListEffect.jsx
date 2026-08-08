import React, { useState, useEffect } from 'react';

export default function ProductListEffect() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect dengan dependency array kosong [] -> Dijalankan 1x saat mount
  useEffect(() => {
    // Simulasi Fetching Data
    fetch('https://fakestoreapi.com/products?limit=3')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetch data:", err));

    // Cleanup Function (Contoh pembersihan jika komponen unmount)
    return () => {
      console.log("Cleanup ProductListEffect Component");
    };
  }, []);

  return (
    <div className="p-4 border rounded-lg bg-gray-50 max-w-md my-4">
      <h3 className="text-lg font-bold mb-2">Daftar Produk (useEffect Demo)</h3>
      
      {loading ? (
        <p className="text-gray-500 italic">Memuat data produk...</p>
      ) : (
        <ul className="list-disc pl-5 space-y-1">
          {products.map((product) => (
            <li key={product.id} className="text-sm">
              <span className="font-medium">{product.title}</span> - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}