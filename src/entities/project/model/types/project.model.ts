import { Schema, models, model } from "mongoose";

const projectSchema = new Schema(
  {
    name: String,
    description: {
      type: String,
      required: false,
    },
    author: { type: Schema.Types.ObjectId, ref: "User" },
    blocks: [{ type: Schema.Types.ObjectId, ref: "BlockModel" }],
  },
  {
    timestamps: true,
  },
);

export const ProjectModel =
  models.ProjectModel || model("ProjectModel", projectSchema);
