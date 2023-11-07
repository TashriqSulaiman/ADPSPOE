const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const { isValidPassword, hashPassword } = require('../utils/hash');

// Login route
router.post('/', async ( req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user)
    return res.status(401).json({ error: 'Incorrect username or password'});

    const valid = await isValidPassword(req.body.password, user.password);

    if (!valid)
    return res.status(401).json({ error: 'Incorrect username or password'});

try{
    const user = new User(req.body);
    user.password = await hashPassword(user.password);
    await user.save();
} catch (err) {
    return res.status(500).json(err);
}
res.sendStatus(201);
});
