import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BrowsePage from './pages/BrowsePage';
import RecipePage from './pages/RecipePage';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-on-background flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<BrowsePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
