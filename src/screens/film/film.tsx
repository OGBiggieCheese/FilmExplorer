import './film.scss';
import FilmDetailsFE from '../../components/filmDetails';
import Cast from '../../components/cast';
import Slider from '../../components/slider';
import Multimedia from '../../components/multimedia';
import Card from '../../components/card';

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
  <div className='flex'>
    <div className='principalInfo'>

   
      <section>
        <Slider title="Cast principal">
            <Cast title='Jun Fukushima' 
            imageUrl='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/eAAExC6g6C1Dx6FsZapbWOe3Ie8.jpg'
            voice='Kazuma Satou (voice)'/>
            <Cast title='Rie Takahashi' 
            imageUrl='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/6S7G3FZnma2vo4B8ODqAdbeRKda.jpg'
            voice='Megumin (voice)'/>
            <Cast title='Sora Amamiya' 
            imageUrl='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/4ZZcdFH4QgbIC8AeJ3BLG1ue7G5.jpg'
            voice='Aqua (voice)'/>
            <Cast title='Ai Kayano' 
            imageUrl='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/pfM0EcMpzPGChxM4sdPjCpPFKch.jpg'
            voice="Lalatina 'Darkness' Dustiness Ford (voice)"/>
            <Cast title='Yui Horie' 
            imageUrl='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/73yQlMWaiOMrhvPCNyOCbbCkILZ.jpg'
            voice="Wiz (voice)"/>
            <Cast title='Aki Toyosaki' 
            imageUrl='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/gsYMc4nD7LFXW2jbBlIdvTauc6z.jpg'
            voice="Yunyun (voice)"/>
            <Cast title='Akeno Watanabe' 
            imageUrl='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/4E05IJxvTGNHb2GSaiyxbCZ5nd8.jpg'
            voice="Sylvia (voice)"/>
            <Cast title='Hiroki Takahashi' 
            imageUrl='https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8vC4fuIORjrgFcXle4bjgDeaNhE.jpg'
            voice="Hyoizaburo (voice)"/>
        </Slider>
      </section> 

      <section>
           <Slider title='Multimedia'>
             <Multimedia/>
           </Slider>
      </section>   

      <section>
        <Slider title='Recomendados'>
           <Card title="Love, Chunibyo & Other Delusions the Movie: Take on Me!" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/aJ7iLBM0JPSptBRhLuT3FQXzSEK.jpg"/>
           <Card title="Sidonia no Kishi: Ai Tsumugu Hoshi " imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cQx04qrOqktvCsFJCNakMSSOZTL.jpg"/>
           <Card title="Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Movie: Orion no Ya" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/78x3RRydNXvdB8BhJAwZz42g1Q1.jpg"/>
           <Card title="Koutetsujou no Kabaneri Movie 3: Unato Kessen" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1O5jE1w2wYkFInDHnWYa91TemOO.jpg"/>
           <Card title="Robot salvaje" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oVHb8XMz1RhsopnpDEm4KRRyYT6.jpg"/>
           <Card title="Garfield: La película" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6QR2FOCQr41gSduN70WulRIhJb7.jpg"/>
        </Slider>
      </section>
      </div>

      <div className='moreInfo'>
        <h4>Titulo original</h4>
        <p>映画 この素晴らしい世界に祝福を！紅伝説</p>
      </div>
    </div>
    
    </>
  );
}

export default Film;
