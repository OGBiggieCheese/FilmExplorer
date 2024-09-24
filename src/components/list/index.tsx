import React, { ReactNode } from 'react';
import styles from './index.module.scss';

interface lProps{
    title: string;
}

export default function List({title}:lProps) {
  return (
    <>
        <div className={styles.list}>
          <div>
              <img className={styles.moviesInList} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/5aaAySq2nI9kYQZzom7ymvoN2Kh.jpg" alt="" />
              <img className={styles.moviesInList} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/xLal6fXNtiJN6Zw6qk21xAtdOeN.jpg" alt="" />
              <img className={styles.moviesInList} src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qu05lw4qUC3bX1VMErn1s0Byw4W.jpg" alt="" />
          </div>
          <h5 className={styles.title}>{title}</h5>
        </div>
    </>
  )
}
