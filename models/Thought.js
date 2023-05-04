const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: "",
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

thoughtSchema
    .virtual ('reactionCount')
    .get (function() {
        return `${this.reactions.length}`;
    })
    .set (function() {
        const reactionCount = this.reactions.length;
        this.set(reactionCount);
    });

//  initialize Thought model

    const Thought = model ('thought', thoughtSchema);

    module.exports = Thought;




// schema.virtual('formattedCreatedAt').get(function() {
//     return moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss');