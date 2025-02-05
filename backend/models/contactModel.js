import mongoose from "mongoose";
const contactModel=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:false
    },
    phone:{
        type:Number,
        required:false
    },
    description:{
        type:String,
        required:false
    },
    type:{
        type:String,
        required:false
    },
})
// exports mongoose.model("contacts",contactModel);
const Contact = mongoose.model("contact",contactModel);
export default Contact;