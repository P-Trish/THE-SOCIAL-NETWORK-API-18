const { Schema, model } = require('mongoose');


const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email address is required'],
            match: /.+\@.+\..+/,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
            },
        ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'User',
            },
        ],
        },
        {
        toJSON: {
            virtuals: true,
        },
    }         
);

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema
    .virtual ('friendCount')
    .get (function (){
        return `${this.friends.length}`;
    })
    .set (function() {
        const friendCount = this.friends.length;
        this.set (friendCount);
    });

// initilaize User model
    const User = model ('user', userSchema);

    module.exports = User;