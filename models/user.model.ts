import mongoose from "mongoose";

interface IUser{
    _id?: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password?: string;
    mobile?: string;
    role: "user" | "delieveryBoy" | "admin"
    image?: string
}

const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false
    },
    mobile: {
        type: String,
        required: false
    },
    role: {
        type: String,
        enum: ["user", "deleivery", "admin"],
        default: "user"
    },
    image: {
        type: String
    }
},
{timestamps: true})

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User;