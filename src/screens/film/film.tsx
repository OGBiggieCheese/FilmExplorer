import './film.scss';
import FilmDetailsFE from '../../components/filmDetails';

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
        cast
      </section>    
    
    
    </>
  );
}

export default Film;
