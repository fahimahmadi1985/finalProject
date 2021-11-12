const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} Time:${Date.now()}`);
    next();
}


const checkLogin = (req, res, next) => {
    const { username, password } = req.body;
    if (username === 'fahim' && password === '123') {
        res.isLogin = true;
        next()
    } else {
        res.send("Please login first")
    }
}


module.exports = { logger, checkLogin }