import { ICast } from "../../types";
import styles from "./index.module.scss";

const defaultImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxcl2IVxUUIcyn9ogSGu64jBOOeiuotXAMXA&s";

const Cast: React.FC<ICast> = ({ title, imageUrl, voice }) => {
  const validImageUrl =
    imageUrl && !imageUrl.endsWith("null") ? imageUrl : defaultImage;
  return (
    <div className={styles.cast}>
      <img src={validImageUrl} alt={title} className={styles.castImage} />
      <h4 className={styles.castTitle}>{title}</h4>
      <p className={styles.castVoice}>{voice}</p>
    </div>
  );
};

export default Cast;
