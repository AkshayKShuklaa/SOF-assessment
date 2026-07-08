import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Background from "./components/Background.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import FloatingActions from "./components/FloatingActions.jsx";
import Home from "./pages/Home.jsx";
import DirectoryPage from "./pages/DirectoryPage.jsx";
import ExhibitorForm from "./pages/ExhibitorForm.jsx";

export default function App() {
  return (
    <Router>
      <div className="light-site min-h-screen overflow-hidden bg-transparent font-body text-white">
        <ScrollProgress />
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/register" element={<ExhibitorForm />} />
        </Routes>
        <FloatingActions />
        <Footer />
      </div>
    </Router>
  );
}
