import Card from "../components/card";
import './homepage.scss';


function Homepage() {

  return (
    <>
     <section className="featured">
     
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
