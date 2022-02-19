import React from "react";
import { recursiveFlat } from "../../helpers";
import { useAppSelector } from "../../redux/store";

import "./CatImages.scss";

interface ICatItem {
  breeds?: unknown[];
  categories?: {
    id: number;
    name: string;
  }[];
  id: string;
  url: string;
  width: number;
}

export const CatImages: React.FC = () => {
  const status = useAppSelector((state) => state.cats.status);
  const data = recursiveFlat(useAppSelector((state) => state.cats.payload));
  return (
    <section className="CatImages">
      {status === "pending" ? (
        <>Loading...</>
      ) : (
        data.map((item: ICatItem, index: number) => (
          <div key={index} className="CatImages__item">
            <img src={item.url} alt="" />
          </div>
        ))
      )}
    </section>
  );
};
