const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema(
    {
        FirstName:{
            type : String,
            required : true,
        },
        LastName:{
            type : String,
            required : true,
        },
        Nic:{
            type : String,
            required : true,
        },
        EmailAddress:{
            type : String,
            required : true,
            unique:true,
        },
        Address:{
            type : String,
            required : true,
        },
        Gender:{
            type : String,
            required : true,
        },
        City:{
            type : String,
            required : true,
        },
        Dob:{
            type : String,
            required : true,
        },
        GuardianName:{
            type : String,
            required : true,
        },
        Password:{
            type : String,
            required : true,
        },
        createdAt: {
            type: Date,
            default: Date.now
          }
    }
)
module.exports = mongoose.model("patient",PatientSchema)