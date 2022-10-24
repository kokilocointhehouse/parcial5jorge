const {Schema, model} = require('mongoose')

const GuatemalaSchema = Schema({
    codigo:{
        type:String,
        required:[true,'El código es requerido']
    },
    nombreproyecto:{
        type:String,
        required:[true,'El nombre del proyecto es requerido']
    },
    monto:{
        type:Number,
        required:[true,'El monto es requerido']
    },
    fecha:{
        type:String,
        required:[true,'La fecha es requerido']
    },
    estado:{
        type:Boolean,
        default:true
    }
})

module.exports = model('Guatemala', GuatemalaSchema)