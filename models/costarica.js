const {Schema, model} = require('mongoose')

const CostaricaSchema = Schema({
    codigo:{
        type:String,
        required:[true,'El código es requerido']
    },
    nombreproyecto:{
        type:String,
        required:[true,'El nombre del proyecto es requerido']
    },
    paisqueejecuta:{
        type:String,
        required:[true,'El monto es requerido']
    },
    fechacierre:{
        type:String,
        required:[true,'La fecha es requerida']
    },
    estado:{
        type:Boolean,
        default:true
    }
})

module.exports = model('Costarica', CostaricaSchema)