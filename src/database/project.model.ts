import { Schema, model, models } from "mongoose";

const blockSchema = new Schema(
  {
    type: String,
    projectId: { type: Schema.Types.ObjectId, ref: "ProjectModel" },
    disabled: Boolean,
  },
  {
    discriminatorKey: "type",
    timestamps: true,
  },
);

const textBlockSchema = new Schema({
  content: {
    title: String,
    subtitle: String,
    description: String,
  },
});

const imageBlockSchema = new Schema({
  content: {
    imageUrls: [String],
  },
});

export const BlockModel = models.BlockModel || model("BlockModel", blockSchema);

export const TextBlockModel =
  models.TextBlockModel ||
  BlockModel.discriminator("TextBlockModel", textBlockSchema);

export const ImageBlockModel =
  models.ImageBlockModel ||
  BlockModel.discriminator("ImageBlockModel", imageBlockSchema);
