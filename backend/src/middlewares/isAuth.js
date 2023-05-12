module.exports = function (req, res, next) {
  console.log(req.session);

  if (req.session.user) {
    next();
  } else {
    res.status(403).json({ message: "Unauthorized" });
  }
};
