module.exports = function (req,res,next) {
	res.locals.isAuth = req.session.isAuthendicated
	res.locals.isUser = req.session.isUser
	res.locals.isEmployer = req.session.isEmployer
	
	next()
}