import mongoose from "mongoose"; 
import dotenv from "dotenv"
dotenv.config()


 const dbConnection  = ()=>{
    mongoose.connect(process.env.DB_URL,{
       dbName: "Job_Portal"

    }).then(()=>{ 
       console.log("MongoDB Connected Sucessfully !")
    }).catch((error)=>{
        console.log(`Failed to connect ${error}`)
    })
    
}
export default dbConnection;