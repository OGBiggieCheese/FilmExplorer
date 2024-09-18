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
           <Card title="Borderlands" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/jtEZi4eZxDjxcDIeMbkQ8HmvRs1.jpg" />
           <Card title="Rebel Ridge" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ymTgBQ8rCouE27oHpAUfgKEgRAj.jpg"/>
           <Card title="Inside Out 2" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/aQnbNiadeGzGSjWLaXyeNxpAUIx.jpg"/>
           <Card title="Mi villano favorito 4" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/wTpzSDfbUuHPEgqgt5vwVtPHhrb.jpg"/>
           <Card title="Beetlejuice 2" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kWJw7dCWHcfMLr0irTHAPIKrJ4I.jpg"/>
           <Card title="Bad Boys: Ride or Die" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/zp0Y7Nsl4UnWiwX4LxXQXgDfXSz.jpg"/>
           <Card title="beetlejuice" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/2LanWSlqSOtyvQiIaoYz448oBSl.jpg"/>
           <Card title="Twisters" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/50xgtaDR0xJkLSVghdTGUeMoPHP.jpg"/>
           <Card title="Twilight of the Warriors: Walled In" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/PywbVPeIhBFc33QXktnhMaysmL.jpg"/>
           <Card title="The Killer" imageUrl="https://image.tmdb.org/t/p/w600_and_h900_bestv2/6PCnxKZZIVRanWb710pNpYVkCSw.jpg"/>
        </div>
     </section>

     
    </>
  )
}

export default Homepage
