const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const notesSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            require: true,
            ref: 'User'
        },
        title: {
            type: String,
            require: true
        },
        text: {
            type: String,
            require: true
        },
        completed: {
            type: Boolean,
            default: false
        },
    },
    {
        timestamps: true
    }
)

notesSchema.plugin(AutoIncrement, {
    inc_field: 'ticket',
    id: 'ticketNums',
    start_seq: 500
}) 

module.exports = mongoose.model('Note', notesSchema)