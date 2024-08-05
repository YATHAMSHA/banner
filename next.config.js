const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/banner/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
};
