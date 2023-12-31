import mongoose, {Schema} from "mongoose";

const commandeSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },
    sound: {
        type: String,
    },
    name: {
        type: String,
    },
    selectedChoice: {
        type: String,
    },
    tito: {
        type: Number,
    },
    etat: {
        type: String,
        enum: ["En attente", "En cours", "Terminé"],
        default: "En attente",
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

const Commande = mongoose.models.Commande || mongoose.model("Commande", commandeSchema);

export default Commande;
