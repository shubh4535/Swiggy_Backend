import RestaurantModel from "../model/Restaurant.model.js"


export async function createRestaurant (req,res){
  // send data through postman
//   console.log(req.body, "req.body");
try{
    let {name,rating,cuisines,deliveryTime} = req.body
    const newRestaurant = await RestaurantModel.create({name,rating,cuisines,deliveryTime})
    return res.status(201).json({"newRest":newRestaurant})
}

catch(err){
    return res.status(500).json({"err":error})
}
}

export async function fetchRestaurant(req,res){
    try{
      const data =   await RestaurantModel.find({})
      if(!data){
        return res.status(404).json({"message":"Restaurant Not found"})
      }
      return res.status(200).json(data)
    }
    catch(err){
    return res.status(500).json({"err":error})
}
}

export async function updateRestaurant(req,res){
    try{
          console.log(req.params.id , "req.params"); //path parameter
    //    let {name,rating,cuisines,deliveryTime,imageUrl} = req.body
          await RestaurantModel.findByIdAndUpdate(req.params.id, req.body )
          return res.status(200).json("Restaurant Updated");
    }
    catch(err){
    return res.status(500).json({"err":error})
}
}

export async function deleteRestaurant(req,res){
    try{
      console.log(req.params , "req.params");
        await RestaurantModel.findByIdAndDelete(req.params.id)
        return res.status(200).json("Restaurant Deleted");
    }
    catch(err){
    return res.status(500).json({"err":error})
}
}

