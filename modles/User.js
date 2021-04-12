const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type:string,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },

    role:{//역할 유저가 관리자인지,일반유저인지.
        type:Number,
        default:0
    },
    image:String,
    token:{//유효성 관리
        type:String
    },
    tokenExp:{//유효기간
        type:Number
    }

})

const User = mongoose.model('User',userSchema)

module.exports = {User}