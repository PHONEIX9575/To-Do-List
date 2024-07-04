import mongoose from "mongoose";

const Connection = ()=>{
    const url = 'mongodb://localhost:27017/';

    mongoose.connect(url, {useNewUrlParser: true});

    mongoose.connection.on('connected',()=>{
        console.log('Database Connected Successfully');
    })

    mongoose.connection.on('disconnected',()=>{
        console.log('Database Disconnected ');
    })

    mongoose.connection.on('error',()=>{
        console.log('error :',error.message);
    })
}

export default Connection;