import mongoose from "mongoose"

const MONGO_URL = process.env.MONGO_URL

export default async () =>
{
    try
    {
        console.log(MONGO_URL)
        await mongoose.connect(MONGO_URL)
        console.log("DB connection established.")
    }
    catch (err)
    { console.error("DB connection failed.", err) }
};