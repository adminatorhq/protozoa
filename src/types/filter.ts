export enum FilterOperators {
  GREATER_THAN = "g",
  LESS_THAN = "l",
  EQUAL_TO = "e",
  CONTAINS = "c",
  NOT_EQUAL = "n",

  NOT_IN = "t",
  BETWEEN = "b",
  DATE = "d",
  IN = "i",

  IS_NULL = "s",
}

export interface IColumnFilterBag<T> {
  operator?: FilterOperators;
  value?: T;
  value2?: T;
}
