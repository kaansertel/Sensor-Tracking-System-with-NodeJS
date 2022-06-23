const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sensorSchema = new Schema({
    Sensor_Turu: String,
    Sensor_Konumu: String,
    Sensor_Raporlama_Sıklıgı: String,
    Sensor_Ozellikleri:[{
        Duman: String,
        CO2: String,
        Toz: String,
        O2: String,
        createdAt: String
    }]
}, { timestamps: true})

const Sensor = mongoose.model('Sensor',sensorSchema)
module.exports = Sensor