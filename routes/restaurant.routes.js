import { createRestaurant, deleteRestaurant, fetchRestaurant, updateRestaurant } from "../controller/restaurant.controller.js";


export default function restaurantRoutes(app){
//create
app.post('/api/restaurants', createRestaurant)
//Read
app.get('/api/restaurants', fetchRestaurant)
//Update
app.get('/api/restaurants/:id', updateRestaurant)
//Delete
app.get('api/restaurants/:id', deleteRestaurant)
}
