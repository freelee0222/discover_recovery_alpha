const Account = require('../models/account-model')

module.exports = {
    createAccount(req, res) {
        const { body } = req
        Account.create(body)
            .then(account => res.json(account))
            .catch( err => err.code === 11000 ? res.json("e-mail error") : res.status(500).json(err))
    },
    login(req, res) {
        const email = req.params.email
        Account.findOne({ email: email })
            .then(account => {
                res.json(account)
            })
            .catch(err => res.status(500).json(err))
    }
}