import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./screens/homepage";
import Film from "./screens/film/film";
import Profile from "./screens/profile/profile";
import Create from "./screens/create/create";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/scrollToTop";
import Search from "./screens/search/search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/film/:filmID" element={<Film />}></Route>
            <Route path="/profile" element={<Profile />}>
              {" "}
            </Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/search" element={<Search />}></Route>
          </Routes>
        </main>
        <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
