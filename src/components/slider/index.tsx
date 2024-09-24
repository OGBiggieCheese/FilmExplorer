import React, { ReactNode } from 'react';
import styles from './index.module.scss';
import { triangle } from '../../assets';


interface sProps{
    title: string;
    children: ReactNode;
}

export default function Slider({title, children}:sProps) {
  return (
    <>
    <div className={styles.flex}>
        <img src={triangle} className={styles.triangle}/>
        <h2 className={styles.title}>{title}</h2>
        <h4 className={styles.ver}> Ver más ➡</h4>
    </div>

    <div className={styles.container}>
        {children}
    </div>
  </>
  )
}
