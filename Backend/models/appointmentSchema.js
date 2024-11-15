import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:[3,"First Name Must Contain At Least 3 Character!"]
    },
    lastName:{
        type:String,
        required:true,
        minlength:[3,"First Name Must Contain At Least 3 Character!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail, "Please Provide A Valid Email"]
    },
    phone:{
        type:String,
        required:true,
        minlength:[10,"Phone Number Must Contain Exact 11 Digits!"],
        maxlength:[10,"Phone Number Must Contain Exact 11 Digits!"]
    },
   
    dob:{
        type : Date,
        required: [true,"DOB is required!"],
    },
    gender:{
        type : String,
        required: true,
        enum:["Male","Female"],
    },
   appointment_date:{
    type:Date,
    required: true,
   },
   department:{
    type:String,
    required: true,
   },
   doctor:{
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    }
   },
   hasVisited:{
    type:Boolean,
    default:false,
   },
   doctorId:{
    type:mongoose.Schema.ObjectId,
    required :true
   },
   patientId:{
    type:mongoose.Schema.ObjectId,
    required :true
   },
   address:{
    type:String,
    require:true,
   },
   status:{
    type:String,
    enum:["Pending","Accepted","Rejected"],
    default:"Pending",
   },
});


export const Appointment = mongoose.model("Appointment",appointmentSchema);