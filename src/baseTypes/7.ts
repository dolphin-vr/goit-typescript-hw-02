/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  Monday,
  Tuesday,
  Wednesdat,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: number): boolean {
  return (day > 4)
}

let day: Week;
day = Week.Friday;

console.log(isWeekend(day))