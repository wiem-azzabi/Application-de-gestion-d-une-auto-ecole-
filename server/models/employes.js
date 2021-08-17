import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
   nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    telephone: {
        type: Number,
        default: 0,
    },
       poste: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    photo:{
        type:String,
        default:'',
    },
})

var employes = mongoose.model('employes', postSchema);

export default employes;