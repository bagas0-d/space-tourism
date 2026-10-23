import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/header/NavBar";

export default function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />

        <main>
          <Routes>
            <Route />
            <Route />
            <Route />
            <Route />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
