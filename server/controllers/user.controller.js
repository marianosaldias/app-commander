const User = require('../models/user.model');

const userCtrl = {};

userCtrl.getUsers = async (req, res, next) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser =  async (req, res, next) => {
    const user = new User({
        firstName       : req.body.firstName,
        lastName        : req.body.lastName,
        nick            : req.body.nick,
        profile         : req.body.profile,
        status          : req.body.status,
        email           : req.body.email,
        phone           : req.body.phone,
        password        : req.body.password        
    });
    console.log(user);
    await user.save();
    res.json({
        'status': 'User saved'
    });
}

userCtrl.getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.editUser = async (req, res, next) => {
    const {id} = req.params;
    const user = {
            firstName       : req.body.firstName,
            lastName        : req.body.lastName,
            nick            : req.body.nick,
            profile         : req.body.profile,
            status          : req.body.status,
            email           : req.body.email,
            phone           : req.body.phone,
            password        : req.body.password
    }
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
        'status': 'User updated'
    });
}

userCtrl.deleteUser = async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'User deleted'
    });
}

module.exports = userCtrl;