import moment from "moment";

export function weekList() {
  const currentYear = moment().year();
  const currentWeek = moment().isoWeek();

  const weeks = [];

  for (let week = currentWeek; week <= 52; week++) {
    const startDate = moment()
      .year(currentYear)
      .isoWeek(week)
      .startOf("isoWeek")
      .day(1);
    const endDate = moment()
      .year(currentYear)
      .isoWeek(week)
      .endOf("isoWeek")
      .day(0);

    const weekText = `Week ${week} (${startDate.format(
      "MMM D"
    )} to ${endDate.format("MMM D")})`;

    weeks.push(weekText);
  }

  console.log(weeks);
}
