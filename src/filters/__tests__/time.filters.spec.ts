import { TimeFilters } from "../time.filters";

describe("TimeFilters", () => {
  it("should format time", () => {
    expect(TimeFilters.formatTime(new Date("2022-03-05"))).toEqual(
      "March 5th, 2022"
    );
    expect(
      TimeFilters.formatTime(new Date("2022-03-05T00:00:00.000+01:00"), "L")
    ).toEqual("5th Mar 2022, 12:03 AM");
    expect(TimeFilters.formatTime(new Date("2022-03-05"), "G")).toEqual(
      "5th Mar 2022"
    );
  });
});
