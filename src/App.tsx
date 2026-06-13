import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Categories from './pages/Categories';
import Companies from './pages/Companies';
import Training from './pages/Training';
import Marketplace from './pages/Marketplace';
import Contracts from './pages/Contracts';
import Permits from './pages/Permits';
import Roadmap from './pages/Roadmap';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-bg)]" dir="rtl">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/training" element={<Training />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/contracts" element={<Contracts />} />
            <Route path="/permits" element={<Permits />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
