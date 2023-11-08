import connectDB from "@/libs/mongodb";
import Commande from "@/models/commande";
import User from "@/models/commande_client";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../libs/mongodb";
import {array} from "yup";


// Connectez-vous à la base de données MongoDB
connectDB();

export async function GET(request) {
    try {
        await connectMongoDB();
        // Récupérer l'email à partir de la requête
        const email = request.nextUrl.searchParams.get('email');
        console.log(email);
        const commande = await User.find({ email: email }).select('email sound name selectedChoice etat');
        return NextResponse.json({commande});
    }
    catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}