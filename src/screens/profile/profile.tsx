import './film.scss';
import Slider from '../../components/slider';
import Card from '../../components/card';
import List from '../../components/list';

function Profile() {
  return (
    <>
     <div className='welcome'>
        <img className='profile' src='https://variety.com/wp-content/uploads/2024/09/Lionel-Messi-1.jpg'></img>
        <h3>Bievenido de nuevo <span>Messi</span>. ¿Qué nueva aventura veremos hoy?</h3>
     </div>
     <Slider title="Favoritos">
           <Card title="Love, Chunibyo & Other Delusions the Movie: Take on Me!" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/aJ7iLBM0JPSptBRhLuT3FQXzSEK.jpg"/>
           <Card title="Sidonia no Kishi: Ai Tsumugu Hoshi " imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cQx04qrOqktvCsFJCNakMSSOZTL.jpg"/>
           <Card title="Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Movie: Orion no Ya" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/78x3RRydNXvdB8BhJAwZz42g1Q1.jpg"/>
           <Card title="Koutetsujou no Kabaneri Movie 3: Unato Kessen" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1O5jE1w2wYkFInDHnWYa91TemOO.jpg"/>
           <Card title="Robot salvaje" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oVHb8XMz1RhsopnpDEm4KRRyYT6.jpg"/>
     </Slider>

     <Slider title='Listas'>
        <List title='Las que mas me gustaron en 2024'></List>
        <List title='Las que menos me gustaron en 2024'></List>
        <List title='anmsdijfkmnasijdm'></List>
     </Slider>

  
    </>
  );
}

export default Profile;
