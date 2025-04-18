require('dotenv/config');

module.exports = function () {
  const firstCommit = process.env.firstCommit.split('/');
  const past = new Date(firstCommit).getTime();
  const now = new Date().getTime();

  const ms = {
    year: 31536000,
    month: 2628000,
    day: 86400,
  };

  let time_elapsed = Math.floor((now - past) / 1000);
  let years = {
    quotient: Math.floor(time_elapsed / ms.year),
    rest: time_elapsed % ms.year,
  };
  let months = {
    quotient: Math.floor(years.rest / ms.month),
    rest: years.rest % ms.month,
  };
  let days = {
    quotient: Math.floor(months.rest / ms.day),
  };

  const plural = (num, word) => `${num} ${word}${num === 1 ? '' : 's'}`;

  return `Been on Github for ${plural(years.quotient, 'Year')}, ${plural(months.quotient,'Month')} and ${plural(days.quotient, 'Day')}.`;
};
