const {User, Thought} = require('../models');
module.exports = {
    getUsers(req, res) {
        User.find ()
        // .populate('thoughts')
        // .populate('friends')
        .then ((users) => res.status(200).json(users))
        .catch ((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
        User.findById (req.params.userId)
        // .populate('thoughts')
        // .populate('friends')
        .then ((users) => res.status(200).json(users))
        .catch ((err) => res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate (
            {_id: req.params.userId},
            {$set: req.body},
            {runValidators: true, new: true}
            ) 
        .then ((user) =>
        !user
            ?res.status(404).json ({message: 'No user witih that ID'})
            :res.json(user)
        )
        .catch ((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        
    },
    addFriend(req, res) {

    },
    deleteFriend(req, res) {

    }

}