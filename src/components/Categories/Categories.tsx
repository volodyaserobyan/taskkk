import { navigate } from "@reach/router";
import React from "react";

import { useAppSelector } from "../../redux/store";

import "./Categories.scss";

interface ICategories {
  setCategoryId: (id?: any) => void;
}

interface categoryItem {
  id: number;
  name: string;
}

export const Categories: React.FC<ICategories> = ({ setCategoryId }) => {
  const data = useAppSelector((state) => state.categories.payload) || [];

  const handleCategoryClick = (id: number): void => {
    setCategoryId(id);
    navigate(`${id}`);
  };
  return (
    <section className="Categories">
      {data.map((item: categoryItem) => (
        <p onClick={() => handleCategoryClick(item.id)} key={item.id}>
          {item.name}
        </p>
      ))}
    </section>
  );
};
