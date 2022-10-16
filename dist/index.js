
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./ame-sdk.cjs.production.min.js')
} else {
  module.exports = require('./ame-sdk.cjs.development.js')
}
