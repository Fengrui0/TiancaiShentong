import Nav from './component/Nav'
import Home from './pages/Home';
import ProductPage from "./pages/ProductPage";
import StoryPage from "./pages/StoryPage";
import FranchisePage from './pages/FranchisePage';

import Footer from './component/Footer';
import {Routes, Route} from "react-router-dom";
export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
