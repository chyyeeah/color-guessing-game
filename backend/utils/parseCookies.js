// const users = require('./users');

// module.exports = (req, res, next) => {
//   if (!req.cookies.hash) {
//     users.hashes[users.length] = null;
//     res.cookie('hash', users.length);
//     users.length++;
//   }
//   console.log(req.cookies)
//   next();
// };