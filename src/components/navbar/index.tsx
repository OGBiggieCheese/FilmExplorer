import styles from "./index.module.scss";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <img src={logo}></img>
        </Link>
        <Link to="/">
          <h3>FilmExplorer</h3>
        </Link>

        <h5>Categorias</h5>

        <Link to="/create">
          <h5> Agregar pelicula </h5>
        </Link>

        <input
          placeholder="Busca una pelicula..."
          className={styles.search}
        ></input>
        <button>☰</button>
      </nav>
    </>
  );
}
