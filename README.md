# Sensor Tracking System
NodeJS ile Web programlama dersi kapsamında geliştirilmiş bir projedir. `Sensor takip sistemi`, kullanıcıların belirttiği `Merkez Nokta Konumu` ve `Yarıçap` değişkenine göre belirli bir alan içerisinde belirtilen `Sensor Tipi` ve `Sensor Sayısına` göre sensor oluşturmamıza olanak tanır. Sensor oluşturulurken ayrıca kullanıcıdan `Sensor Raporlama Sıklığı` değerinin girilmesi istenir. Oluşturulan Sensorler belirtilen raporlama sıklığına göre kayıt oluşturup kullanıcıya listelemektedir. Kullanıcı sensorlerden gelen bu verileri gerçek zamanlı olarak takip edebilmektedir.


## `Sensor Oluşturma`
![Sensor Olusturma](https://github.com/kaansertel/Sensor-Tracking-System-with-NodeJS/blob/main/image/Sensor_olusturma.png)
```sh
Gerekli bilgiler doldurulur.
```
![Sensor Olusturma2](https://github.com/kaansertel/Sensor-Tracking-System-with-NodeJS/blob/main/image/Sensor_Olusturma_02.png)
```sh
Sensorler Oluşturulur. 
Başka bir Sensor oluşturmak istersek. Önceki X ve Y noktaları ve Yarıçap bilgisi bize gösterilir.
```
![Sensor Olusturma3](https://github.com/kaansertel/Sensor-Tracking-System-with-NodeJS/blob/main/image/Sensor_Olusturma_03.png)

## `Sensor Listeleme`
![Sensor Listeleme](https://github.com/kaansertel/Sensor-Tracking-System-with-NodeJS/blob/main/image/Sensor_Listesi_01.png)

## `Sensor Detayları`
```sh
Sensor detayları listelenir. 
Kullanıcı gerçek zamanlı olarak bu verileri takip eder.
```
![Sensor Detay]https://github.com/kaansertel/Sensor-Tracking-System-with-NodeJS/blob/main/image/2.png)
![Sensor Detay]https://github.com/kaansertel/Sensor-Tracking-System-with-NodeJS/blob/main/image/3.png)
![Sensor Detay]https://github.com/kaansertel/Sensor-Tracking-System-with-NodeJS/blob/main/image/4.png)
![Sensor Detay]https://github.com/kaansertel/Sensor-Tracking-System-with-NodeJS/blob/main/image/5.png)


## Projeyi Çalıştırma
Proje dizinine geçin: **`cd NodeJSProje`**
Gerekli indirmeleri yapın: **`npm install`**
Düzenlemeler: **`"app.js"`** içerisindeki **`const dbURL = 'mongodb+srv://kaan:asd123@nodejs.dlvdw.mongodb.net/node-sensor?retryWrites=true&w=majority'`** veritabanı bağlantısını kendinize göre yapılandırınız.
Çalıştırma: **`node app.js`** yazarak programımızı çalıştırabilirsiniz.

Programımız ***http://localhost:3000/***  adresinde çalışacaktır.

## Proje Yapısı
Proje yapısı bu şekildedir.
![Dosyalama]https://github.com/kaansertel/Sensor-Tracking-System-with-NodeJS/blob/main/image/Dosyalama.png)

## Proje Ekibi
- [Kaan Sertel](https://github.com/kaansertel)
- [Aslıhan Akbulut](https://github.com/aslihanakbulut)
- [İrem Sertel](https://github.com/iremsertel)










