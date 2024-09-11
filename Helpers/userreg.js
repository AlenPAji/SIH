const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
const customerSchema = new Schema({
    fullname:String,
    Housename:String,
    housenumber:Number,
    sAddr:String,
    city:String,
    zipcode:Number,
    phno:Number,
    email:String,
    additionalinformation:String,
    pending: { type: Boolean, default: false }

  });


  const alertSchema = new Schema({
    alerttype:String,
    message:String

  });
  const customer= mongoose.model('customer', customerSchema);
  const alert=mongoose.model('Alerts',alertSchema)

  function register(userData){
    console.log(userData)
    return new Promise(async(resolve,reject)=>{
        
        const newcustomer = new customer();
       newcustomer.fullname = userData.fullName;
       newcustomer.Housename = userData.houseName;
       newcustomer.housenumber=userData.houseNumber;
       newcustomer.sAddr=userData.streetAddress;
       newcustomer.city=userData.city;
       newcustomer.zipcode=userData.zipCode;
       newcustomer.phno=userData.phoneNumber;
       newcustomer.email=userData.email;
       newcustomer.additionalinformation=userData.additionalInfo;
        newcustomer.save();
        resolve(newcustomer);
    })

}

function getalerts(data){
return new Promise(async(resolve,reject)=>{
    const alert = new alert();
    alert.alerttype=data.alertType;
    alert.message=data.message;

    alert.save()
})
}

function sendalerts(data){
    return new Promise(async(resolve,reject)=>{
        alert.find({}).then((result)=>{
            resolve(result);
        })
    })
    }

function seependingconnection(){
    return new Promise(async(resolve,reject)=>{
        customer.find({pending:false}).then((result)=>{
            resolve(result)
        })

    }
)
}





module.exports={
    register,
    seependingconnection,
    getalerts,
    sendalerts
}
  
