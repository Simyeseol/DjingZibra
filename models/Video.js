import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({

    // Video를 Database에 저장ㅎ지 않을 것. bytes(x). link(o)
    fileUrl: {
        type: String,
        required: "File URL is required",

    },

    title: {
        type: String,
        required: "Title is required"
    },

    description: String,

    views: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]

});

const model = mongoose.model("Video", VideoSchema);
export default model;