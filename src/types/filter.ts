export enum FilterOperators {
  GREATER_THAN = "g",
  LESS_THAN = "l",
  EQUAL_TO = "e",
  NOT_IN = "ni",
  BETWEEN = "bt",
  DATE = "d",
  IN = "in",
  CONTAINS = "co",
  NOT_EQUAL = "ne",
}

export interface IColumnFilterBag<T> {
  operator?: FilterOperators;
  value?: T;
  value2?: T;
}
