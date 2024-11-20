import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./screens/homepage";
import Film from "./screens/film/film";
import Profile from "./screens/profile/profile";
import Create from "./screens/create/create";
import Navbar from "./components/navbar";
import ScrollToTop from "./components/scrollToTop";
import Search from "./screens/search/search";
import Films from "./screens/films/films";
import Edit from "./screens/edit/edit";
import List from "./screens/list/list";

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
            <Route path="/film/:source/:filmID" element={<Film />}></Route>
            <Route path="/profile" element={<Profile />}>
              {" "}
            </Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/films" element={<Films />}></Route>
            <Route path="/edit/:filmID" element={<Edit />} />
            <Route path="/list/:listID" element={<List />} />
          </Routes>
        </main>
        <footer></footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
