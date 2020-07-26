import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);


//mongodb와의 연결을 db에 저장.
const db = mongoose.connection;

const handleOpen = () => console.log("😝 Connected to DB");
const handleError = (error) => console.log(`😅 Error on DB Connection : ${error}`);

db.once("open", handleOpen);
db.once("error", handleError);
