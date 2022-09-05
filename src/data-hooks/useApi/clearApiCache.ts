import { QueryCache } from "react-query";

export const clearApiCache = () => {
  new QueryCache().clear();
};
