import React, { useState } from 'react';
import ButtonStateless from './ButtonStateless';

// Stateful Component (Otak / Logika)
export default function CounterStateful() {
  const [count, setCount] = useState(0); // Deklarasi useState

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="p-4 border rounded-lg bg-gray-50 max-w-sm my-4">
      <h3 className="text-lg font-bold mb-2">Penghitung (useState Demo)</h3>
      <p className="text-xl mb-4">Jumlah saat ini: <span className="font-semibold">{count}</span></p>
      
      <div className="flex gap-2">
        <ButtonStateless label="Tambah (+)" onClick={handleIncrement} color="bg-green-600" />
        <ButtonStateless label="Kurang (-)" onClick={handleDecrement} color="bg-red-600" />
        <ButtonStateless label="Reset" onClick={handleReset} color="bg-gray-600" />
      </div>
    </div>
  );
}