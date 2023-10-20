"use server";

import { v2 as cloudinary } from "cloudinary";
import { Photo } from "database/project.model";

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function getSignature() {
  const timestamp = Math.round(new Date().getTime() / 1000);

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: "prog-team" },
    cloudinaryConfig.api_secret
  );

  return { timestamp, signature };
}

export async function saveToDatabase({ public_id, version, signature, image }) {
  // verify the data
  const expectedSignature = cloudinary.utils.api_sign_request(
    { public_id, version },
    cloudinaryConfig.api_secret
  );

  if (expectedSignature === signature) {
    // safe to write to database
    console.log({ public_id });
  }

  console.log(image);
  const newPhoto = new Photo({
    public_id: image.public_id,
    secure_url: image.secure_url,
  });

  console.log(newPhoto);

  await Photo.insertMany(newPhoto);
}

//async function uploadPhotostToCloudinary(newFiles) {
//  const multiplePhotosPromise = newFiles.map((file) => {
//    cloudinary.uploader.upload(file.filepath, { folder: "prog-team" });
//  });

//  return await Promise.all(multiplePhotosPromise);
//}

//export async function uploadPhoto(formData) {
//  console.log(formData);
//  try {
//    const photos = await uploadPhotostToCloudinary(formData);

//    const newPhotos = formData.map((photo) => {
//      const newPhoto = new Photo({
//        public_id: photo.public_id,
//        secure_url: photo.secure_url,
//      });
//      return newPhoto;
//    });

//    await Photo.insertMany(newPhotos);

//    console.log(photos);
//  } catch (error) {
//    return { errMsg: error.message };
//  }
//}
