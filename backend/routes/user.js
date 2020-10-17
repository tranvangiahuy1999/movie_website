const router = require('express').Router();
let user = require('../models/user.model');

router.route('/').get((req, res) => {
    user.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error '+ err));
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new user({username, password});
    newUser.save().then(() => res.json('Added')).catch((err) => res.json('Error ' + err));
}
)

router.route('/delete/:id').delete((req, res) => {
    user.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Executed'))
    .catch(error=>res.json('Error '+error))
})

module.exports = router;