import { Tabs } from "antd";
import type { TabsProps } from "antd";
import styles from "./index.module.scss";
import { ConfigProvider } from "antd";
import { IMedia } from "../../types";

const Multimedia = ({ videos, images, posters }: IMedia) => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Videos",
      children: (
        <div className={styles.container}>
          {videos.map((video) => (
            <iframe
              key={video.key}
              className={styles.video}
              src={`https://www.youtube.com/embed/${video.src}`}
            ></iframe>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: "Imágenes",
      children: (
        <div className={styles.container}>
          {images.map((image) => (
            <img
              key={image.key}
              className={styles.img}
              src={image.src}
              alt="Imagen de la película"
            />
          ))}
        </div>
      ),
    },
    {
      key: "3",
      label: "Carteles",
      children: (
        <div className={styles.container}>
          {posters.map((poster) => (
            <img
              key={poster.key}
              className={styles.carteles}
              src={poster.src}
              alt="Póster de la película"
            />
          ))}
        </div>
      ),
    },
  ];

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              inkBarColor: "rgb(178,168,255)",
              itemColor: "rgb(244,244,244)",
              cardBg: "rgba(0,0,0,0.88)",
              itemActiveColor: "rgb(255,255,255)",
              itemHoverColor: "rgb(178,168,255)",
              itemSelectedColor: "rgb(178,168,255)",
              colorBorderSecondary: "rgb(36, 36, 36)",
            },
          },
        }}
      >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </ConfigProvider>
    </>
  );
};

export default Multimedia;
