import React from 'react';
import MainLayout from './components/MainLayout';
import CounterStateful from './components/CounterStateful';
import ProductListEffect from './components/ProductListEffect';

export default function App() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-800">1. Demo useState Component</h2>
          <CounterStateful />
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800">2. Demo useEffect (Server State)</h2>
          <ProductListEffect />
        </section>
      </div>
    </MainLayout>
  );
}