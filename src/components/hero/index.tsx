import styles from './index.module.scss';

interface HeroProps {
  title: string;
  subtitle: string; 
  imageUrl: string; 
  posterUrl: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, posterUrl }) => {
  return (
    <div className={styles.hero}>
      <img src={imageUrl} alt={title} className={styles.heroImage} />
      
      <div className={styles.heroContent}>
        <img src={posterUrl} alt={title} className={styles.heroPoster}/>
        
        <div className={styles.textContainer}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <h2 className={styles.heroSubtitle}>{subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
