import styles from './index.module.scss';

interface CastProps {
  title: string;
  imageUrl: string;
  voice: string;
}

const Cast: React.FC<CastProps> = ({ title, imageUrl, voice }) => {
  return (
    <div className={styles.cast}>
      <img src={imageUrl} alt={title} className={styles.castImage} />
      <h4 className={styles.castTitle}>{title}</h4>
      <p className={styles.castVoice}>{voice}</p>
    </div>
  );
};


export default Cast;
