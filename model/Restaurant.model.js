import mongoose from 'mongoose'
//schema
const restaurantSchema = new mongoose.Schema({
    name: String,
    rating: String,
    cuisines: String,
    deliveryTime: String

});
const RestaurantModel =  mongoose.model("Restaurants", restaurantSchema);
export default RestaurantModel;



// jerris3050_db_user
// oNPav1iYSntYwEY8
// mongodb+srv://jerris3050_db_user:oNPav1iYSntYwEY8@cluster0.rkoagij.mongodb.net/


