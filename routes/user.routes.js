import { createRestaurant, deleteRestaurant, fetchRestaurant, updateRestaurant } from "../controller/restaurant.controller.js";
import { login, register } from "../controller/user.controller.js";


export default function userRoutes(app){

app.post('/api/register', register)
app.post('/api/login', login)

}
