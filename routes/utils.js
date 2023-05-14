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

// const formatTitle = (title) => {
//   return req.params.title
//     .replace(/-/g, ' ');
//     .replace(/,/g, '');

//   const newTitle = req.params.title.replace(/-/g, ' ');

//   if (title.startsWith('you')) {
//     let newTitle = title.slice(0, 3) + ',' + title.slice(3);
//     title = newTitle;
//   }
// }

module.exports = { convertDate };
