// added heroku environment variables
module.exports = {
  mongoURI: process.env.MONGO_URI,
  FbClientID: process.env.FB_CLIENT_ID,
  FbClientSecret: process.env.FB_CLIENT_SECRET,
  cookieKey: process.env.COOKIE_KEY
}