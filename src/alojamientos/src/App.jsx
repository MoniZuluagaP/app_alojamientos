import React from "react";
import './App.css';
import './components/Main.css'
import Header from "./components/Header";
import {PFormBusqueda} from "./components/PFormBusqueda";
import {Footer} from "./components/Footer";
import AppAdmin from "./srcAdmin/AppAdmin";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <PFormBusqueda />
      <main className="main">
          <Home />
          <AppAdmin />
          <Footer />

      </main>
        {/*<Router>*/}
        {/*    <Routes>*/}
        {/*        /!*<Route path="/" element={<Home />} />*!/*/}
        {/*        /!*<Route path="/admin" element={<AppAdmin/>} />*!/*/}
        {/*    </Routes>*/}
        {/*</Router>*/}

    </div>
  );
}

export default App;