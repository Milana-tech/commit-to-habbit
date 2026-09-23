import { describe, expect, it } from "vitest";
import { addDays, toLocalDate } from "./localDate";

describe("addDays", () => {
  it("moves to the next day", () => {
    expect(addDays(toLocalDate(new Date(2026, 8, 22)), 1)).toBe("2026-09-23");
  });

  it("crosses a month boundary", () => {
    expect(addDays(toLocalDate(new Date(2026, 8, 30)), 1)).toBe("2026-10-01");
  });

  it("crosses a year boundary", () => {
    expect(addDays(toLocalDate(new Date(2026, 11, 31)), 1)).toBe("2027-01-01");
  });

  it("handles a leap year", () => {
    expect(addDays(toLocalDate(new Date(2024, 1, 28)), 1)).toBe("2024-02-29");
  });

  it("moves backwards with a negative value", () => {
    expect(addDays(toLocalDate(new Date(2026, 8, 22)), -1)).toBe("2026-09-21");
  });

  it("returns the same date for zero", () => {
    expect(addDays(toLocalDate(new Date(2026, 8, 22)), 0)).toBe("2026-09-22");
  });
});
