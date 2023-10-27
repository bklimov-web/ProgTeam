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

const backgroundBlockSchema = new Schema({
  content: {
    color: String,
    titlebg: String,
  },
});

const headerBlockSchema = new Schema({
  content: {
    logo: String,
    navLinks: [String],
  },
});

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

export const BlockModel = models.BlockModel || model("BlockModel", blockSchema);

export const TextBlockModel =
  models.TextBlockModel ||
  BlockModel.discriminator("TextBlockModel", textBlockSchema);

export const ImageBlockModel =
  models.ImageBlockModel ||
  BlockModel.discriminator("ImageBlockModel", imageBlockSchema);

export const BackgroundBlockModel =
  models.BackgroundBlockModel ||
  BlockModel.discriminator("BackgroundBlockModel", backgroundBlockSchema);

export const HeaderBlockModel =
  models.HeaderBlockModel ||
  BlockModel.discriminator("HeaderBlockModel", headerBlockSchema);

export const ProjectModel =
  models.ProjectModel || model("ProjectModel", projectSchema);
