import connectDB from "@/libs/mongodb";
import Commande from "@/models/commande";
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectMongoDB from "../../../../libs/mongodb";


export async function POST(request) {
  const {selectedStyle,email,commentary,name,selectedChoice,etat} = await request.json()

  try {
    await connectMongoDB()
    await Commande.create({
        email,
        commentary,
        name,
        selectedChoice,
        selectedStyle,
        etat,




    })
    return NextResponse.json({
      msg: ["Commande sent successfully"],
      success: true,
    });
    } catch (error) {
if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }

}

export async function GET() {
  await connectMongoDB()
  const commande = await Commande.find()
  return NextResponse.json({commande})

}