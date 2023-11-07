const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = re.header('x-auth-token');
    let id;

    try {
        const {userId} = jwt.verify(toke, process.env.JWT_SECRET_KEY);
        id = userId;
    }   catch (err) {
        return res.sendStatus(401);
    }

    if (id) {
        req.user ={id};
        return next();
    }

    re.sendStatus(401);
}

    module.exports = auth;
    