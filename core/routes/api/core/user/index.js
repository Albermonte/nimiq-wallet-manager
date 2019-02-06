const express = require('express');
const auth = require('../../../auth');
const router = express.Router();


module.exports = function (NimiqHelper) {
    router.use('/login', require('./login')(NimiqHelper));
    router.use('/register', require('./register')(NimiqHelper));

    router.get('/current', auth.required, async (req, res, next) => {
        const {payload: {id}} = req;

        return Users.findById(id)
            .then(async (user) => {
                if (!user) {
                    return res.sendStatus(400);
                }
                let settings = await Config.getAll(id);
                let userJson = user.toJSON();
                return res.json({user: userJson, settings: settings});
            });
    })
    return router;
};