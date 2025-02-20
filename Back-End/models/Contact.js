import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    phoneAreaCode:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    companyName:{type:String,required:true},
    description:{type:String,required:true}
});

const Contact = mongoose.model('User',userSchema);
export default Contact;