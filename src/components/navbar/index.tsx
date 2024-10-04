import styles from "./index.module.scss";
import { logo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  const openNav = () => {
    setIsOpen(true);
  };
  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/">
        <h3>FilmExplorer</h3>
      </Link>
      <h5>Peliculas</h5>
      <Link to="/">
        <h5>Series</h5>
      </Link>
      <input
        placeholder="Busca una pelicula..."
        className={styles.search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
      <button onClick={openNav}>☰</button>

      <div className={`${styles.sidenav} ${isOpen ? styles.sidenavOpen : ""}`}>
        <a onClick={closeNav} className={styles.closebtn}>
          &times;
        </a>
        <Link to="/profile">
          <img src="https://media.admagazine.com/photos/637d11a6e63c8afac40e7a01/1:1/w_2896,h_2896,c_limit/1442809583"></img>
          <h3>Messi</h3>
        </Link>
        <Link to="/profile">
          <h4 className={styles.options}>Mis favoritos</h4>
        </Link>
        <Link to="/create">
          <h4 className={styles.options}>Añadir pelicula</h4>
        </Link>
        <Link to="/">
          <h4 className={styles.options}>Añadir serie</h4>
        </Link>
        <Link to="/">
          <h4 className={styles.options}>Editar perfil</h4>
        </Link>
      </div>
    </nav>
  );
}
