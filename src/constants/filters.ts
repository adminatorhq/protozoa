export interface IDateFilterOption {
  label: string;
  value: string;
  hideOnFrom?: true;
  hideOnTo?: true;
  countLimit?: number;
}

export const BEGINNING_OF_TIME_VALUE = "bot";
export const NOW_VALUE = "now";

export const DATE_FILTER_VALUE = {
  BEGINNING_OF_TIME_VALUE: "bt",
  BEGINNING_OF_YEAR: "by",
  NOW: "n",
  HOUR: "h",
  DAY: "d",
  WEEK: "w",
  MONTH: "m",
  QUARTER: "q",
  YEAR: "y",
};

export const DATE_FILTER_OPTIONS: IDateFilterOption[] = [
  {
    label: "Beginning of time",
    value: DATE_FILTER_VALUE.BEGINNING_OF_TIME_VALUE,
    hideOnTo: true,
  },
  {
    label: "Beginning of Year",
    value: DATE_FILTER_VALUE.BEGINNING_OF_YEAR,
    hideOnTo: true,
  },
  {
    label: "Hour",
    value: DATE_FILTER_VALUE.HOUR,
    countLimit: 24,
  },
  {
    label: "Day",
    value: DATE_FILTER_VALUE.DAY,
    countLimit: 7,
  },
  {
    label: "Week",
    value: DATE_FILTER_VALUE.WEEK,
    countLimit: 4,
  },
  {
    label: "Month",
    value: DATE_FILTER_VALUE.MONTH,
    countLimit: 12,
  },
  {
    label: "Quarter",
    value: DATE_FILTER_VALUE.QUARTER,
    countLimit: 4,
  },
  {
    label: "Year",
    value: DATE_FILTER_VALUE.YEAR,
    countLimit: 10,
  },
  {
    label: "Now",
    value: DATE_FILTER_VALUE.NOW,
    hideOnFrom: true,
  },
];
