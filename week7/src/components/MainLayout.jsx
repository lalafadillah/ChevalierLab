import React from 'react';

// Structural Component (Kerangka Layout)
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">Chevalier Laboratory SAS</h1>
        <p className="text-sm opacity-80">Frontend Web Development - Week 7 Modul</p>
      </header>

      {/* Main Content (Menerima children) */}
      <main className="flex-1 container mx-auto p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white p-4 text-center text-sm">
        <p>&copy; 2026 Chevalier Lab. All rights reserved.</p>
      </footer>
    </div>
  );
}