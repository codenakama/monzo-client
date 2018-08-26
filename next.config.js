module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    clientSecret: process.env.CLIENT_SECRET,
    clientId: process.env.CLIENT_ID,
    isNetlify: process.env.NETLIFY
  }
};
