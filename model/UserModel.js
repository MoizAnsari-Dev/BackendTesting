import mongoose, { model } from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
    },
    resetPassswordToken: {
        type: String,
    },
    resetPasswordExpires: {
        type: Date,
    },
}, {
    timestamps: true, // It's shows the data is created At and Updated At
});

const User = mongoose.model("User", userSchema);

export default User;