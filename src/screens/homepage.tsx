import Card from "../components/card";
import Hero from "../components/hero";
import { Carousel } from 'antd';
import './homepage.scss';


function Homepage() {

  return (
    <>
     <section className="featured">
        <Carousel autoplay>
          <Hero title="El señor de los anillos: Los anillos de poder" imageUrl="https://image.tmdb.org/t/p/original/vpc8qVhFvu0SM4USg72bHPRmOPL.jpg" posterUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/suvlZfDAoq5vfVUrfb468KJhFlL.jpg" subtitle="Viaje a la Tierra Media"/>
          <Hero title="Los simpsons" imageUrl="https://image.tmdb.org/t/p/original/pxeqQX4qFQ0cVxPt5SWZENV5BH3.jpg" posterUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/vH0Mghb0lNJ5k7EpDwI7iJV7qaO.jpg" subtitle="En sus puestos, listos, ¡ouch!"/>
          <Hero title="Garfield: La película" imageUrl="https://image.tmdb.org/t/p/original/1wP1phHo2CROOqzv7Azs0MT5esU.jpg" posterUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6QR2FOCQr41gSduN70WulRIhJb7.jpg" subtitle="Agárrate a tu asiento"/>
          <Hero title="El reino del planeta de los simios" imageUrl="https://image.tmdb.org/t/p/original/fqv8v6AycXKsivp1T5yKtLbGXce.jpg" posterUrl="https://image.tmdb.org/t/p/original/kkFn3KM47Qq4Wjhd8GuFfe3LX27.jpg" subtitle="No one can stop the reign."/>
        </Carousel>
     </section>

     <section>
        <div className="flex">
          <img src="src/assets/triangle.svg" className="triangle"/>
          <h2 className="title">Lo más popular</h2>
        </div>
        <div className="cardContainer">
           <Card title="Deadpool" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9TFSqghEHrlBMRR63yTx80Orxva.jpg"/>
           <Card title="Twister" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9TFSqghEHrlBMRR63yTx80Orxva.jpg" />
           <Card title="Inside-out" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9TFSqghEHrlBMRR63yTx80Orxva.jpg"/>
           <Card title="Despicable me 4" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9TFSqghEHrlBMRR63yTx80Orxva.jpg"/>
           <Card title="Despicable me 4" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9TFSqghEHrlBMRR63yTx80Orxva.jpg"/>
           <Card title="Despicable me 4" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9TFSqghEHrlBMRR63yTx80Orxva.jpg"/>
           <Card title="Despicable me 4" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9TFSqghEHrlBMRR63yTx80Orxva.jpg"/>
           <Card title="Despicable me 4" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9TFSqghEHrlBMRR63yTx80Orxva.jpg"/>
           <Card title="Despicable me 4" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9TFSqghEHrlBMRR63yTx80Orxva.jpg"/>
           <Card title="Despicable me 4" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9TFSqghEHrlBMRR63yTx80Orxva.jpg"/>
           <Card title="Despicable me 4" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/9TFSqghEHrlBMRR63yTx80Orxva.jpg"/>
        </div>
     </section>

     
    </>
  )
}

export default Homepage
