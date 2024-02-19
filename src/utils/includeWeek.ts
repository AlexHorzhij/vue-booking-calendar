import * as dayjs from "dayjs";

export const includeWeek = (
  dateStart: string,
  dateEnd: string,
  week: string[]
) => {
  return;
  dayjs(dateStart).isBefore(week[0]) && dayjs(dateEnd).isAfter(week[6]);
};
