import React from 'react';
import Routes from './Routes';

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;