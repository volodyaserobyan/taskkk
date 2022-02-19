import { navigate } from "@reach/router";
import React, { useEffect, useState } from "react";

import Categories from "../../components/Categories";
import CatImages from "../../components/CatImages";
import { getCategories } from "../../redux/slices/categories-slice";
import { getCatsImages } from "../../redux/slices/cats-slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

import "./WrapperContainer.scss";

export const WrapperContainer: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [categoryId, setCategoryId] = useState<number>(1);
  const [status, setStatus] = useState<"pending" | "fulfilled" | "rejected">(
    "pending"
  );

  const dispatch = useAppDispatch();
  const statusCategories = useAppSelector((state) => state.categories.status);

  useEffect(() => {
    dispatch(getCategories());
    navigate("/1");
  }, [dispatch]);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    dispatch(getCatsImages({ page, categoryId }));
  }, [page, categoryId, dispatch]);

  useEffect(() => {
    if (statusCategories === "pending") {
      setStatus("pending");
    } else if (statusCategories === "fulfilled") {
      setStatus("fulfilled");
    } else {
      setStatus("rejected");
    }
  }, [statusCategories]);
  return (
    <section className="WrapperContainer">
      {status === "pending" ? (
        <>Loading...</>
      ) : status === "fulfilled" ? (
        <div className="WrapperContainer__cont">
          <Categories setCategoryId={setCategoryId} />
          <CatImages />
          <button onClick={loadMore} className="WrapperContainer__cont__button">
            Load More content
          </button>
        </div>
      ) : (
        <p>Oops Something went wrong</p>
      )}
    </section>
  );
};
