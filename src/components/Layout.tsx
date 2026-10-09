import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
