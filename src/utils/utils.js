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

const getRandom = async () => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/random?results=5';
  const results = await fetch(url);
  const json = await results.json();
  return json;
};

const getOrdered = async () => {
  const url = 'https://owen-wilson-wow-api.onrender.com/wows/ordered/0-90';
  const results = await fetch(url);
  const json = await results.json();
  return json;
};

module.exports = { convertDate, getRandom, getOrdered };
