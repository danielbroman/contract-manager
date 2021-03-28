const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function (next) {
    // Check if the password has not been changed. If not it calls next
    if(!this.isModified('password')) return next();

    bcrypt.hash(this.password, 10).then((hashedPass) => {
        this.password = hashedPass;
        next();
    });
}, function(err) {
    next(err);
});

UserSchema.methods.comparePassword = async function(insertedPassword, next) {
    return await bcrypt.compare(insertedPassword, this.password);
}

UserSchema.methods.signToken = async function(next) {
    return await jwt.sign({userId: this._id}, process.env.TOKEN_SECRET, {expiresIn: 60 * 60});
}

module.exports = mongoose.model('User', UserSchema);