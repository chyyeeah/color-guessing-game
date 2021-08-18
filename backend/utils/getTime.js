const moment = require('moment');

module.exports = {
  sf: () => moment().utcOffset(-420),
  ny: () => moment().utcOffset(-240)
};