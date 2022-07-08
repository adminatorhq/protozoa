import { TimeFilters } from "../time.filters";

describe("TimeFilters", () => {
  it("works", () => {
    expect(TimeFilters.formatTime(new Date("2022-03-05"))).toEqual(
      "March 5th, 2022"
    );
    expect(TimeFilters.formatTime(new Date("2022-03-05"), "L")).toEqual(
      "5th Mar 2022, 1:03 AM"
    );
    expect(TimeFilters.formatTime(new Date("2022-03-05"), "G")).toEqual(
      "5th Mar 2022"
    );
  });
});
