const Snippet = require('../models/User').Snippet
/**
 * Checks if the user is logged in if not and you tries to acess a autenticated page you get a error.
 *
 * @param {*}req Require.
 * @param {*}res Response.
 * @param {*}next Next.
 * @returns {Function}  Next.
 */
function loggedin (req, res, next) {
  if (req.session.finduser) {
    return next()
  } else {
    res.status(403)
    res.send('Not autenticated')
  }
}

/**
 *Check if user is not logged in.
 *
 * @param {*} req Require.
 * @param {*}res Response.
 * @param {*}next Next.
 * @returns {Function} Next.
 */
function notSignedIn (req, res, next) {
  if (req.session.finduser === undefined) {
    return next()
  } else {
    res.status(403)
    res.send('You are already signed in')
  }
}

/**
 *If user is trying to get to its site ir returns next otherwise it will throw a flash and status.
 *
 * @param {*} req Require.
 * @param {*}res Response.
 * @param {*}next Next.
 * @returns {Function} Next.
 */
async function checkUser (req, res, next) {
  try {
    const getsnippet = await Snippet.findOne({ _id: req.params.id })
    if (getsnippet.username === req.session.finduser.username) {
      return next()
    } else {
      res.status(403)
      req.session.flash = { message: 'The site you where looking for dosent exist' }
      res.redirect('/snippet')
    }
  } catch (error) {
    return res.status(404).send('Not found')
  }
}

module.exports = { loggedin, notSignedIn, checkUser }
