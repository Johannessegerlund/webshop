
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

module.exports = { loggedin }
