const mongoose= require("mongoose");

const connection= async()=>{
    try{
         await mongoose.connect("mongodb://localhost:27017/contact")
         .then(
            ()=>{
                console.log("database connected");
            },
            (err)=>{
                console.log(err);
            }
         )
    }
    catch(err){
           console.log(err);
    }
};

connection();