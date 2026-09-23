export type LocalDate = string & { readonly __brand: "LocalDate" };

export function toLocalDate(date: Date): LocalDate {
  const year = String(date.getFullYear()).padStart(4, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}` as LocalDate;
}

export function addDays(date: LocalDate, days: number): LocalDate {
  const [year, month, day] = date.split("-");
  const shifted = new Date(
    Date.UTC(Number(year), Number(month) - 1, Number(day) + days),
  );
  return toLocalDateFromUtc(shifted);
}

function toLocalDateFromUtc(date: Date): LocalDate {
  const year = String(date.getUTCFullYear()).padStart(4, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}` as LocalDate;
}
