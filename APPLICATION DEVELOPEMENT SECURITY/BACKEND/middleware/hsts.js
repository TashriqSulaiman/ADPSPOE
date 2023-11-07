function hsts(req, res, next) {
    if (req.secure){
        res.setHeader(
            'Strict-Transport-Security',
            'max-age=3156000; icludeSubDomains; preload'
        );
    }
    next();
}

module.exports = hsts;
