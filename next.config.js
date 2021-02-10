const isPrd = process.env.NODE_ENV === 'production'

module.exports = {
  /* config options here */
  assetPrefix: isPrd ? './lunar-calendar' : ''
}
