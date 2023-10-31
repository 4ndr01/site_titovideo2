import connectDB from "@/libs/mongodb";
import Commande from "@/models/commande";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../../libs/mongodb";

// Connectez-vous à la base de données MongoDB
connectDB();

export default async (req, res) => {
    const { userId } = req.query;
    try {
        // Recherchez les commandes de l'utilisateur
        const orders = await Commande.find({ userId }).exec();

        // Répondez avec les commandes trouvées
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la récupération des commandes.' });
    }
};