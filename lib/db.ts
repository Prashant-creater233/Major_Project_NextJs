import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

if(!MONGODB_URI) {
    throw new Error("db error")
}

let cached = global.mongoose
if(!cached){
    cached=global.mongoose={conn:null,promise:null}
}

const connectDb = async () => {
    if(cached.conn){
        return cached.conn
    }

    if(!cached.promise){
        cached.promise=mongoose.connect(MONGODB_URI).then((conn)=>mongoose.connection)
    }

    try {
        const conn=await cached.promise
        return conn
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;