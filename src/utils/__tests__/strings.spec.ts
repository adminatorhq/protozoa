import { StringUtils } from "../strings.utils";

describe("StringUtils.pluralize", () => {
  it("should work correctly with singular forms", () => {
    expect(StringUtils.pluralize({ count: 1, singular: "boy" })).toBe("boy");
    expect(StringUtils.pluralize({ count: 2, singular: "boy" })).toBe("boys");
    expect(StringUtils.pluralize({ count: 0, singular: "boy" })).toBe("boys");
  });

  it("should work correctly with plural forms", () => {
    expect(
      StringUtils.pluralize({
        count: 1,
        singular: "complexity",
        plural: "complexities",
      })
    ).toBe("complexity");
    expect(
      StringUtils.pluralize({
        count: 2,
        singular: "complexity",
        plural: "complexities",
      })
    ).toBe("complexities");
    expect(
      StringUtils.pluralize({
        count: 0,
        singular: "complexity",
        plural: "complexities",
      })
    ).toBe("complexities");
  });

  it("should work correctly inclusive marker", () => {
    expect(
      StringUtils.pluralize({
        count: 1,
        singular: "complexity",
        plural: "complexities",
        inclusive: true,
      })
    ).toBe("1 complexity");
    expect(
      StringUtils.pluralize({
        count: 2,
        singular: "complexity",
        plural: "complexities",
        inclusive: true,
      })
    ).toBe("2 complexities");
    expect(
      StringUtils.pluralize({
        count: 0,
        singular: "complexity",
        plural: "complexities",
        inclusive: true,
      })
    ).toBe("0 complexities");
  });
});
