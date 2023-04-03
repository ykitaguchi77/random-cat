//https://typescriptbook.jp/tutorials/nextjs
//Vercelへのデプロイ　https://reffect.co.jp/react/next-js-github-vercel


import { NextPage } from "next";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

type CatImage = {
  url: string;
};

const CatRoom: NextPage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCatImage = async (): Promise<CatImage> => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    return { url: data[0].url };
  };

  useEffect(() => {
    fetchCatImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoading(false);
    });
  }, []);

  const handleNewCatClick = () => {
    setLoading(true);
    fetchCatImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoading(false);
    });
  };

  return (
    <div>
      <h1>猫の小部屋</h1>
      <button onClick={handleNewCatClick} className={styles.button}>他のにゃんこも見る</button>
      <br />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt="Cat" style={{ width: "100vw", height: "auto" }} />
      )}
    </div>
  );
};

export default CatRoom;
