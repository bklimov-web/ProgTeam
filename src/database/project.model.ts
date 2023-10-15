import { Schema, model, models } from "mongoose";

const blockSchema = new Schema(
  { type: String },
  {
    discriminatorKey: "type",
    timestamps: true,
  },
);

const textBlockSchema = new Schema({
  disabled: Boolean,
  title: String,
  subtitle: String,
  description: String,
});

const imageBlockSchema = new Schema({
  disabled: Boolean,
  imageUrls: [String],
});

const projectSchema = new Schema(
  {
    name: String,
    description: {
      type: String,
      required: false,
    },
    blocks: [{ type: Schema.Types.ObjectId, ref: "BlockModel" }],
  },
  {
    timestamps: true,
  },
);

export const BlockModel = models.BlockModel || model("BlockModel", blockSchema);

export const TextBlockModel =
  models.TextBlockModel ||
  BlockModel.discriminator("TextBlockModel", textBlockSchema);

export const ImageBlockModel =
  models.ImageBlockModel ||
  BlockModel.discriminator("ImageBlockModel", imageBlockSchema);

export const ProjectModel =
  models.ProjectModel || model("ProjectModel", projectSchema);
