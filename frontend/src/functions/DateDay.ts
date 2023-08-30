export default class DateDay {
  date: string;
  formDate: Date;

  constructor(date: string) {
    this.date = date;
    this.formDate = new Date(this.date);
  }

  public getWeekDay() {
    const numWeek = this.formDate.getDay();
    return isNaN(numWeek)
      ? null
      : [
          'sunday',
          'monday',
          'tuesday',
          'wednesday',
          'thursday',
          'friday',
          'saturday',
        ][numWeek];
  }
  public getMonthDay() {
    const numMonth = this.formDate.getMonth();
    return isNaN(numMonth)
      ? null
      : [
          'January ',
          'February',
          'Marth',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ][numMonth];
  }
}

