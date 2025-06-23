import mongoose, { Document, Schema } from "mongoose";

interface userCredentials extends Document {
    userName: string;
    userEmail: string;
    userPassword: string;
    isUser: string;
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
        trim: true,
    },
    userPassword: {
        type: String,
        required: [true, 'You need to input password'],
    },
    isUser: {
        type: String,
        default: "attendee"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Users = mongoose.model<userCredentials>('users', UserSchema);

export default Users;