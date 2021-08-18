const moment = require('moment');

module.exports = {
  sf: () => moment().utcOffset(-420).format('h:mm:ss A. MMMM D, YYYY'),
  ny: () => moment().utcOffset(-240).format('h:mm:ss A. MMMM D, YYYY')
};