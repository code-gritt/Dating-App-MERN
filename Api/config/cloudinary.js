import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: "dixptruyr",
  api_key: "532696811226456",
  api_secret: "TgSEegJweisxQsif3roPkpspzXk",
});

export default cloudinary;
