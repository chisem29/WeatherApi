export default class DateDay {
  private date: string[] | undefined;
  formDate: Date;

  constructor(date: string[] | undefined) {
    this.date = date;
    this.formDate = new Date(this.date?.at(0) ?? '');
  }

  public getWeekDay() : string | null {
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
  public getMonthDay() : string | null {
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
  public getNumDay() : string | undefined {
    return this.date?.at(0)?.split('-')?.at(-1) 
  }
  public getTimeDay() : string | undefined {
    return this.date?.at(1)?.slice(0, 5)
  }
}
