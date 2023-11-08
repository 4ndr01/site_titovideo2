import connectDB from "@/libs/mongodb";
import Commande from "@/models/commande";
import User from "@/models/commande_client";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../libs/mongodb";
import {array} from "yup";
import { useSession } from "next-auth/react";


// Connectez-vous à la base de données MongoDB
connectDB();

export async function GET(request) {
    try {
   
        await connectMongoDB()
        const commandes = await User.find().select('email sound name selectedChoice etat')
        console.log(commandes);
        return NextResponse.json({commandes})
    }
catch (error) {
        console.log(error)
    }
}