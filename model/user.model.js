import mongoose from 'mongoose'
//schema
const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String

});
const userModel =  mongoose.model("user", userSchema);
export default userModel;



// jerris3050_db_user
// oNPav1iYSntYwEY8
// mongodb+srv://jerris3050_db_user:oNPav1iYSntYwEY8@cluster0.rkoagij.mongodb.net/


