import mongoose, { Schema, models } from "mongoose";
import commandeSchema from "./commande";

const clientSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        commandes: [commandeSchema],
    },
    { timestamps: true }
);

const Client = models.Client || mongoose.model("Client", clientSchema);

export default Client;