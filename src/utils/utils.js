const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const convertDate = (date) => {
  const splitDate = date.split('-');
  const newDate = `${months[+splitDate[1]]} ${splitDate[2]}, ${splitDate[0]}`;
  return newDate;
};

module.exports = { convertDate };
