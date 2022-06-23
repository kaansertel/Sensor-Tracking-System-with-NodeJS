const express = require('express')
const mongoose = require('mongoose')
const Sensor = require('./models/sensor')

var x;
var y;
var r;


const app = express()

const dbURL = 'mongodb+srv://kaan:asd123@nodejs.dlvdw.mongodb.net/node-sensor?retryWrites=true&w=majority'

mongoose.connect(dbURL, { useNewUrlParser: true , useUnifiedTopology: true})
    .then((result)=> app.listen(3000))
    .catch((err) => console.log(err))
app.set('view engine', 'ejs')

// app.use(express.static('public')) // public altındaki bütün dosyaların erişilebilir olmasını sağlar.
app.use(express.urlencoded({ extended: true })) // body altındaki verilere erişmek için. Iç içe nesne göndermek için kullanılır.


app.get('/',(req,res)=> {
    res.render('index', {
        title:'Anasayfa',
        x : x,
        y : y,
        r : r
    });
})


app.post('/add',(req,res)=> {
    x = parseInt(req.body.xNokta)
    y = parseInt(req.body.yNokta)
    r = parseInt(req.body.YariCap)

    let sıklık = parseInt(req.body.Raporlama)
    let sensorSayisi = req.body.SensorSayisi
    let tip = req.body.SensorTipi
    
 for (let i = 0; i < sensorSayisi; i++) {
        // r^2 = (a - x)^2 + (b - y)^2
    let a = ((Math.floor(Math.random() *(r+1)))*2) - (r-x)
    
    let maxb = parseInt(Math.sqrt((r*r) - ((a - x)*(a - x))))
    var birinciB = maxb + y
    var ikinciB = (maxb*-1) + y
    var b;

    
    if (birinciB > ikinciB) {
        b = (Math.floor(Math.random() *((birinciB+(ikinciB*-1))+1))) + ikinciB
    }else if (ikinciB > birinciB) {
        b = (Math.floor(Math.random() *((ikinciB+(birinciB*-1))+1))) + birinciB
    } else {
        b =  y
        
    }

    let c = "("+a.toString()+","+b.toString()+")"

   // (Math.random() * 10).toFixed(2)
    
   let dizi = [{
        Duman: (Math.random() * 10).toFixed(2),
        CO2: (Math.random() * 10).toFixed(2),
        Toz: (Math.random() * 10).toFixed(2),
        O2: (Math.random() * 10).toFixed(2),
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
    }]

    const sensor = new Sensor ({
        Sensor_Turu: tip,
        Sensor_Konumu: c,
        Sensor_Raporlama_Sıklıgı: sıklık,
        Sensor_Ozellikleri: dizi
    }); 


    // sensor.update({Sensor_Turu: tip, Sensor_Konumu: c, Sensor_Raporlama_Sıklıgı: sıklık}, { Sensor_Ozellikleri: dizi },(error,data)=>{

    // })
    sensor.save()
        .then((result => {
            let id = result["_id"]
            var deger = setInterval(()=>{
                dizi.push({Duman: (Math.random() * 10).toFixed(2),
                    CO2: (Math.random() * 10).toFixed(2),
                    Toz: (Math.random() * 10).toFixed(2),
                    O2: (Math.random() * 10).toFixed(2),
                    createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')})
                    Sensor.updateOne({_id: id}, { $set :{ Sensor_Ozellikleri: dizi }},(error,data)=>{
                        if (error) {
                            console.log("Bir hata ile karşılaşıldı.")
                        }
                        else {
                            sensor.save()
                                .then((result)=>{
                                    //console.log(dizi)
                                })
                                .catch((err)=>{
                                    clearInterval(deger)
                                })
                        }
                    })
            },(sıklık * 1000))

        }))
        .catch((err =>{
            //console.log(err)
        }))

 }        setTimeout(function(){

    res.redirect('/list')
}, 500); 
  
})

app.get('/list',(req,res) => {
    Sensor.find()
    .then((result)=> {
        res.render('list',{title:'Sensorler', sensors: result})
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.delete('/delete/:id', (req,res) => {
    const id = req.params.id
    Sensor.findByIdAndDelete(id)
        .then((result) => {
            res.json({link: '/list'})
        })
        .catch((err)=>{
            console.log(err)
        })
})


app.get('/detailList/:id/:saniye',(req,res) => {
    const id =  req.params.id
    const saniye =  req.params.saniye
    
    //console.log(saniye)
    
        Sensor.findById(id)
        .then((result) => {
            var sıklık = result["Sensor_Raporlama_Sıklıgı"]
            let detail = result["Sensor_Ozellikleri"]

            res.render('detailList',{title:'Detay Sayfası', rapor: sıklık, details: detail})
        })
        .catch((err)=>{
            console.log(err)
        })
})