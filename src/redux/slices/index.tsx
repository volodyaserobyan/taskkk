import { catsSlice } from "./cats-slice";
import { categoriesSlice } from "./categories-slice";

export const reducer = {
  cats: catsSlice.reducer,
  categories: categoriesSlice.reducer,
};

export { catsSlice } from "./cats-slice";
export { categoriesSlice } from "./categories-slice";
