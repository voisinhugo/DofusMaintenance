const differenceInHours = require('date-fns/differenceInHours');
const parseISO = require('date-fns/parseISO');

const isInLastHour = (dateString) => {
  const hourDifference = differenceInHours(new Date(), parseISO(dateString));
  return hourDifference < 1;
};

exports.isInLastHour = isInLastHour;
