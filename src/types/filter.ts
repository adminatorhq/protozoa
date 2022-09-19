export enum FilterOperators {
  GREATER_THAN = "g",
  LESS_THAN = "l",
  EQUAL_TO = "e",
  NOT_IN = "t",
  BETWEEN = "b",
  DATE = "d",
  IN = "i",
  CONTAINS = "c",
  NOT_EQUAL = "n",
}

export interface IColumnFilterBag<T> {
  operator?: FilterOperators;
  value?: T;
  value2?: T;
}
