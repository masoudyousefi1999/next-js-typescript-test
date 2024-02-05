import mongoose from "mongoose";

const connectToDB = async () => {
    if(mongoose.connections[0].readyState){
        return false;
    }else{
        await mongoose.connect("mongodb://localhost:27017/typescript-first-project")
    }
}

export default connectToDB;