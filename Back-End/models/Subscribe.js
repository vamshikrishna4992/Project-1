import mongoose from "mongoose";


const subscribeSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
});

const Subscribe = mongoose.model('Subscriber',subscribeSchema);
export default Subscribe;