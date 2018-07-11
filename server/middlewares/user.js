const createUserSession = (req, res, next) => {
  console.log(req.session);
  if (!req.session.user) req.session.user = {};
  next();
};
module.exports = {
  createUserSession
};
