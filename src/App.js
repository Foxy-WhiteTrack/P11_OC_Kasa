import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Header from "./components/Header/Header";
import HousingSheet from "./pages/HousingSheet/HousingSheet.jsx";
import Footer from "./components/Footer/Footer";
import Error404 from "./pages/Error404/Error404.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<HousingSheet />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;