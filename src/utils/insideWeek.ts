import * as dayjs from "dayjs";

export const insideWeek = (
  dateStart: string,
  dateEnd: string,
  week: string[]
) => {
  const inside = (date: string) => {
    console.log("date: ", date);
    return dayjs(date).isAfter(week[0]) && dayjs(date).isBefore(week[6]);
  };
  return inside(dateStart) || inside(dateEnd);
};
