import mongoose, { Document, Schema } from "mongoose";

interface userCredentials extends Document {
    userName: string;
    userEmail: string;
    userPassword: string;
    role: string;
    createdAt: Date;
}

const UserSchema: Schema = new Schema<userCredentials>({
    userName: {
        type: String,
        required: [true, 'Your username please'],
        trim: true,
        maxlength: [18, 'Title cannot be more than 18 characters']
    },
    userEmail: {
        type: String,
        required: [true, 'Your genuine email please'],
        unique:true,
        trim: true,
    },
    userPassword: {
        type: String,
        required: [true, 'You need to input password'],
        minlength:15
    },
    role: {
        type: String,
        enum: ['creator', 'attendee'],
        default: 'attendee'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Users = mongoose.model<userCredentials>('users', UserSchema);

export default Users;