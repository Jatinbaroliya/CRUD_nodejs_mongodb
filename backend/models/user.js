import mongoose from 'mongoose';

//mongo schema
const userSchema = new mongoose.Schema({
    firstname: {
        type : String,
        required : true
    },
    lastname: {
        type : String,
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    gender : {
        type : String
    }
},
{timestamps : true}
);
    
//model creation
const User = mongoose.model('User', userSchema);

export default User;