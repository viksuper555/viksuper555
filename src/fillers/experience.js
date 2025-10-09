require('dotenv/config');

module.exports = function () {
  const firstCommit = process.env.firstCommit.split('/');
  
  const past = new Date(firstCommit.join('/'));
  const now = new Date();
  
  let years = now.getFullYear() - past.getFullYear();
  let months = now.getMonth() - past.getMonth();
  let days = now.getDate() - past.getDate();
  
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  
  if (months < 0) {
    years--;
    months += 12;
  }
  
  const plural = (num, word) => `${num} ${word}${num === 1 ? '' : 's'}`;
  
  return `Been on Github for ${plural(years, 'Year')}, ${plural(months, 'Month')} and ${plural(days, 'Day')}.`;
};
