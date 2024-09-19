import styles from './index.module.scss';


interface filmProps {
  title: string;
  description: string; 
  imageUrl: string; 
  posterUrl: string;
  categories: string[];
}

const filmDetailsFE: React.FC<filmProps> = ({ title, description, imageUrl, posterUrl, categories}) => {
  return (
    <div className={styles.film}>
      <img src={imageUrl} alt={title} className={styles.filmImage} />
      
      <div className={styles.filmContent}>
        <img src={posterUrl} alt={title} className={styles.filmPoster}/>
        
        <div className={styles.textContainer}>
         
          <h1 className={styles.filmTitle}>{title}</h1>
          <div className={styles.filmMore}>
            <p>01/01/2023</p>
            <p>1hr 40min</p>
            <p>8.9/10 ★</p>
          </div>
          <div className={styles.categories}>
            {categories.map((category, index) => (
              <button key={index} className={styles.categoryButton}>
                {category}
              </button>
            ))}
          </div>
          <h2 className={styles.filmDescription}>{description}</h2>

          <div>
            <button className={styles.btnAction}>👁</button>
            <button className={styles.btnAction}>♥</button>
            <button className={styles.btnAction}>🕑</button>
            <button className={styles.trailer}>Ver trailer ➡</button>
          </div>

          <div className={styles.castPrincipal}>
            <div className={styles.dn}>
               <h4>Takaomi Kanasaki</h4>
               <h5>Director</h5>
            </div>
            <div className={styles.dn}>
              <h4>Natsume Akatsuki</h4>
              <h5>Novela</h5>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default filmDetailsFE;
