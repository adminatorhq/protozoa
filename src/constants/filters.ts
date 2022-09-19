export interface IDateFilterOption {
  label: string;
  value: string;
  hideOnFrom?: true;
  hideOnTo?: true;
  countLimit?: number;
}

export enum DATE_FILTER_VALUE {
  BEGINNING_OF_TIME_VALUE = "bt",
  BEGINNING_OF_YEAR = "by",
  NOW = "n",
  HOUR = "h",
  DAY = "d",
  WEEK = "w",
  MONTH = "m",
  QUARTER = "q",
  YEAR = "y",
}

const DATE_FILTER_OPTIONS$1: Record<
  DATE_FILTER_VALUE,
  Omit<IDateFilterOption, "value">
> = {
  [DATE_FILTER_VALUE.BEGINNING_OF_TIME_VALUE]: {
    label: "Beginning of time",
    hideOnTo: true,
  },
  [DATE_FILTER_VALUE.BEGINNING_OF_YEAR]: {
    label: "Beginning of Year",
    hideOnTo: true,
  },
  [DATE_FILTER_VALUE.HOUR]: {
    label: "Hour",
    countLimit: 24,
  },
  [DATE_FILTER_VALUE.DAY]: {
    label: "Day",
    countLimit: 7,
  },
  [DATE_FILTER_VALUE.WEEK]: {
    label: "Week",
    countLimit: 4,
  },
  [DATE_FILTER_VALUE.MONTH]: {
    label: "Month",
    countLimit: 12,
  },
  [DATE_FILTER_VALUE.QUARTER]: {
    label: "Quarter",
    countLimit: 4,
  },
  [DATE_FILTER_VALUE.YEAR]: {
    label: "Year",
    countLimit: 10,
  },
  [DATE_FILTER_VALUE.NOW]: {
    label: "Now",
    hideOnFrom: true,
  },
};

export const DATE_FILTER_OPTIONS: IDateFilterOption[] = Object.entries(
  DATE_FILTER_OPTIONS$1
).map(([value, config]) => ({ ...config, value }));
