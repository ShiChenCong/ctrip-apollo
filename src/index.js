const {
  AVAILABLE_OPTIONS,
  DEFAULT_POLLING_RETRY_POLICY
} = require('./options')

const ApolloApplication = require('./application')

const apollo = options => new ApolloApplication(options)

Object.defineProperties(apollo, {
  DEFAULT_POLLING_RETRY_POLICY: {
    value: DEFAULT_POLLING_RETRY_POLICY
  },

  AVAILABLE_OPTIONS: {
    value: AVAILABLE_OPTIONS
  }
})

module.exports = apollo
