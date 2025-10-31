import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    idea: {
      type: String,
      required: true,
    },
    analysis: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 0, // default to 0 if not calculated
    },
  },
  { timestamps: true }
);

const Idea = mongoose.model("Idea", ideaSchema);
export default Idea;
