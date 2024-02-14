const mongoose = require('mongoose')
const { Schema } = mongoose

const memberSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        age: Number,
        phone: String,
        gender: String,
        cleanDay: String,
        email: { type: String, unique: true },
        password: String,
        homegroup: {type:String, default:"none"},
        sponsorName: { type: String, default: "none"},
        isSponsor: { type: Boolean, default: false},
        isAdmin: { type: Boolean, default: false}
    },
    { timestamps: true }
)

module.exports = mongoose.model("member", memberSchema)