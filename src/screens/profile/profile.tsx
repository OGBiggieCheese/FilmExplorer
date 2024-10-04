import "./profile.scss";
import Slider from "../../components/slider";
import Card from "../../components/card";
import List from "../../components/list";

function Profile() {
  return (
    <>
      <section className="welcome">
        <img
          className="profile"
          src="https://media.admagazine.com/photos/637d11a6e63c8afac40e7a01/1:1/w_2896,h_2896,c_limit/1442809583"
        ></img>
        <h3>
          Bievenido de nuevo <span>Messi</span>. ¿Qué nueva aventura veremos
          hoy?
        </h3>
      </section>
      <section>
        <Slider title="Favoritos">
          <Card
            id={2}
            title="Love, Chunibyo & Other Delusions the Movie: Take on Me!"
            imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/aJ7iLBM0JPSptBRhLuT3FQXzSEK.jpg"
          />
          <Card
            id={2}
            title="Sidonia no Kishi: Ai Tsumugu Hoshi "
            imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/cQx04qrOqktvCsFJCNakMSSOZTL.jpg"
          />
          <Card
            id={2}
            title="Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka Movie: Orion no Ya"
            imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/78x3RRydNXvdB8BhJAwZz42g1Q1.jpg"
          />
          <Card
            id={2}
            title="Koutetsujou no Kabaneri Movie 3: Unato Kessen"
            imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1O5jE1w2wYkFInDHnWYa91TemOO.jpg"
          />
          <Card
            id={2}
            title="Robot salvaje"
            imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/oVHb8XMz1RhsopnpDEm4KRRyYT6.jpg"
          />
        </Slider>
      </section>
      <section>
        <Slider title="Listas">
          <List title="Las que mas me gustaron en 2024"></List>
          <List title="Las que menos me gustaron en 2024"></List>
          <List title="anmsdijfkmnasijdm"></List>
        </Slider>
      </section>
    </>
  );
}

export default Profile;
