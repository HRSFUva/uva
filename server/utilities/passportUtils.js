module.exports.isLoggedIn = (req, res, next) => {
  if (req.user || req.url === '/login/facebook/callback') {
    next();
  } else {
    console.log('not logged in');
    res.redirect('/login/facebook/callback');
  }
};



