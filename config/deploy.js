module.exports = {
  production: {
    store: {
      type: 'redis',
      host: 'pixelhandler.com',
      port: 6379,
      password: process.env['PIXHLR_REDIS_PWORD']
    },
    assets: {
      type: 's3',
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_ACCESS_KEY'],
      bucket: 'chat-app'
    }
  }
};
