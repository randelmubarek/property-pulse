
import {Schema , model , models, mongo} from 'mongoose'
const userSchema = new Schema ({
    email : {type: String , required: [true , 'Email is required'] , unique: [true, 'Email already exists' ]},
    username : {type: String , required: [true , 'Username is required'] , unique: [true, 'Username already exists' ]},
    image : {type: String},
    bookmarks : [ {type: Schema.Types.ObjectId , ref: 'Property'}]

} , {timestamps: true} // to automatically add createdAt and updatedAt fields
);
const User = models.User || model('User' , userSchema);
export default User;
