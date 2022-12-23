import mongoose from "mongoose"

const schema = new mongoose.Schema({
        title: String,
        tech_stack: String,
        position: String,
        time: String,
        links: [Map]
})

export default mongoose.model("Projects", schema)