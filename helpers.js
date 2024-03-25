export function formatTime(date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

export function formatDate(date) {
  const daysOfWeek = ['Ned', 'Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub'];
  const dayOfWeek = daysOfWeek[date.getDay()];

  const dayOfMonth = date.getDate();
  const monthNames = [
    'Januar',
    'Februar',
    'Mart',
    'April',
    'Maj',
    'Juni',
    'Juli',
    'August',
    'Septembar',
    'Oktobar',
    'Novembar',
    'Decembar',
  ];
  const month = monthNames[date.getMonth()];

  return `${dayOfWeek}, ${dayOfMonth}. ${month}`;
}
