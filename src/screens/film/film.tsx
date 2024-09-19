import './film.scss';
import FilmDetailsFE from '../../components/filmDetails';
import Cast from '../../components/cast';
import { triangle } from '../../assets';

function Film() {
  return (
    <>
      <FilmDetailsFE 
        title="Kono Subarashii Sekai ni Bakuen wo!" 
        description="La vida del amante de los videojuegos, Satou Kazuma, termina cuando es arrollado por un camión. En un inesperado giro del destino reencarna en otro mundo gracias a la diosa Aqua, a una torpe hechicera llamada Megumin y a una delirante caballero llamada Darkness. En esta película este peculiar grupo se enfrentará a una increíble amenaza. ¿Podrán salvar la Villa Carmesí? ¿Qué pasará con Kazuma?" 
        imageUrl="https://image.tmdb.org/t/p/original/3g8fsosj03C2rl0Jfeermtu0rCR.jpg" 
        posterUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/eHueHMcdlxFv4Ky8ZPeVXAdieMF.jpg"
        categories={['Animacion','Aventura', 'Comedia', 'Fantasia']}
        />
      <section>
        <div className="flex">
          <img src={triangle} className="triangle"/>
          <h2 className="title">Cast prinicpal</h2>
          <h4 className="ver"> Ver más ➡</h4>
        </div>

        <Cast title='Jun Fukushima' 
        imageUrl='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/eAAExC6g6C1Dx6FsZapbWOe3Ie8.jpg
        '
        voice='Kazuma Satou (voice)'/>
      </section>    
    
    
    </>
  );
}

export default Film;
