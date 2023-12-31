import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(

  {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

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
  },
  { timestamps: true }
);

const User =mongoose.models.User || mongoose.model("User", userSchema);
export default User;