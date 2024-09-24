import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import styles from './index.module.scss';
import {ConfigProvider} from 'antd';


const onChange = (key: string) => {
  console.log(key);
};
const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Videos',
    children: (
      <div className={styles.container}>
        <iframe className={styles.video} src="https://www.youtube.com/embed/yvRuiXsfLHg"></iframe>
        <iframe className={styles.video} src="https://www.youtube.com/embed/Eg9CKVsteT4"></iframe>
        <iframe className={styles.video} src="https://www.youtube.com/embed/yvRuiXsfLHg"></iframe>
      </div>
    ),
  },
  {
    key: '2',
    label: 'Imagenes',
    children: (
        <div className={styles.container}>
        <img className={styles.img} src='https://media.themoviedb.org/t/p/w533_and_h300_bestv2/wqpTrmGiqMJ6onAq3zrBhfomIJl.jpg'></img>
        <img className={styles.img} src='https://media.themoviedb.org/t/p/w533_and_h300_bestv2/m5HPKCi7GdhKmxPTcOQmcLfEmZ9.jpg'></img>
        <img className={styles.img} src='https://image.tmdb.org/t/p/original/94nlPXorHInKOy8SmeoXuQez0la.jpg'></img>
        <img className={styles.img} src='https://image.tmdb.org/t/p/original/mpbxNY6I7qBNE3i972aZXj7a23i.jpg'></img>
        </div>
    ),
  },
  {
    key: '3',
    label: 'Carteles',
    children: (
      <div className={styles.container}>
      <img className={styles.carteles} src='https://media.themoviedb.org/t/p/w220_and_h330_face/5aaAySq2nI9kYQZzom7ymvoN2Kh.jpg'></img>
      <img className={styles.carteles} src='https://media.themoviedb.org/t/p/w220_and_h330_face/TjamMnTywFTtaBkeFuYykcwiqB.jpg'></img>
      <img className={styles.carteles} src='https://media.themoviedb.org/t/p/w220_and_h330_face/e8MWt64syvgfrTstnEoAfxATY5j.jpg'></img>
      <img className={styles.carteles} src='https://media.themoviedb.org/t/p/w220_and_h330_face/qatTUSl6PY0YwyRMyDvEn4vqEgQ.jpg'></img>
      </div>
     ),
  },
];






interface mProps{
}

export default function Multimedia({}:mProps) {
return (
  <>
  <ConfigProvider
    theme={{
      components: {
        Tabs: {
          inkBarColor: 'rgb(178,168,255)',
          itemColor: 'rgb(244,244,244)',
          cardBg: 'rgba(0,0,0,0.88)',
          itemActiveColor: 'rgb(255,255,255)',
          itemHoverColor: 'rgb(178,168,255)',
          itemSelectedColor: 'rgb(178,168,255)',
          colorBorderSecondary: 'rgb(36, 36, 36)',

        },
      },
    }}
  >
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </ConfigProvider>
</>
)
}