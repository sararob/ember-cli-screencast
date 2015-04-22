module.exports = {
  production: {
    store: {
      host: 'pixelhandler.com',
      port: 6379,
      password: process.env['PIXHLR_REDIS_PWORD']
    },
    assets: {
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
      bucket: 'chat-app'
    }
  }
};
