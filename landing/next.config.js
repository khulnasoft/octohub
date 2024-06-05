const withCSS = require('@zeit/next-css')

const withTM = require('next-transpile-modules')(['@octohub/core'], {
  resolveSymlinks: true,
})

module.exports = withCSS(
  withTM({
    env: {
      STRIPE_PUBLIC_KEY:
        process.env.NODE_ENV === 'production'
          ? 'pk_live_SRFXNC2vJzVcCNwE7fXVmCM900PLxWhQ6D'
          : 'pk_test_PvG6Vvwe8z0SdsxY7fWtvAPW00X0ooU3XF',
      PADDLE_VENDOR_ID: 33705,
    },
  }),
)
