const mongoose = require('mongoose')

const dbConnection = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_CNN, {
            
        })
        console.log('La base de datos esta ONLINE')
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    dbConnection
}