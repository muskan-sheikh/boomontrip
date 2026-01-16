import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Privacy from './pages/Privacy';
import About from './pages/About';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layout/MainLayout';

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route
            path="/"
            element={
              <MainLayout />
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
