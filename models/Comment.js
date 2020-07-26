import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    video: {
        //어떤 object ID가 어디서 온 건지를 알려줘야 함. 어느 model에서 온건지! 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video"
    }

});

const model = mongoose.model("Comment", CommentSchema);
export default model;