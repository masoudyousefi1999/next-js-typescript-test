import {Schema,model, models} from "mongoose"

interface IUser {
    username : string;
    email : string;
    password : string;
    mobile? : number
}


const schema = new Schema<IUser>({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : false
    }
})


const usersModel = models.user  || model<IUser>("user",schema)

export default usersModel