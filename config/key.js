if (process.env.NODE_ENV === 'production') {//로컬 혹은 PROD
    module.exports = require('./prod');
  } else {
    module.exports = require('./dev');
  }