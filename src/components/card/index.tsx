
import React from 'react';
import styles from './index.module.scss';

interface CardProps {
  title: string;
  imageUrl: string; 
}

const Card: React.FC<CardProps> = ({ title, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <h4>{title}</h4>
      <button className={styles.favoriteButton}>
        +
      </button>
    </div>
  );
};

export default Card;
