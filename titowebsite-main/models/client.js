import mongoose, { Schema } from "mongoose";

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
    // ... (autres champs pertinents pour les clients)
  },
  { timestamps: true }
);

const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);
export default Client;
