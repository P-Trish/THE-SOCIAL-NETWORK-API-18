const {User, Thought} = require('../models');
module.exports = {
    getUsers(req, res) {
        User.find ()
        .populate('thoughts')
        .populate('friends')
        .then ((users) => res.status(200).json(users))
        .catch ((err) => res.status(500).json(err));
    },
    createUser(req, res) {

    },
    getSingleUser(req, res) {
        User.findById (req.params.id)
        .populate('thoughts')
        .populate('friends')
        .then ((users) => res.status(200).json(users))
        .catch ((err) => res.status(500).json(err));
    },
    updateUser(req, res) {

    },
    deleteUser(req, res) {

    },
    addFriend(req, res) {

    },
    deleteFriend(req, res) {

    }

}