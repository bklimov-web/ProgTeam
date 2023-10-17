import { Schema, model, models } from "mongoose";

const blockSchema = new Schema(
  { type: String },
  {
    discriminatorKey: "type",
    timestamps: true,
  }
);

const textBlockSchema = new Schema({
  title: String,
  subtitle: String,
  description: String,
});

const imageBlockSchema = new Schema({
  content: {
    images: [
      {
        imageUrl: String,
        title: String,
        alt: String,
      },
    ],
  },
  styles: {
    paddingTop: String,
    paddingBottom: String,
    background: String,
  },
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
  }
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
