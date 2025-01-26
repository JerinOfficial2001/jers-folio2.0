import React from "react";
import { FemaleImage, MaleImage } from "../constants/Json";
import { FemaleAvatar, MaleAvatar } from "../types/interfaces";

export function getImage(folder: "male" | "female", imagePath: any) {
  if (imagePath?.length < 2) {
    if (folder == "male") {
      return MaleImage[imagePath as keyof MaleAvatar];
    } else {
      return FemaleImage[imagePath as keyof FemaleAvatar];
    }
  } else {
    return imagePath;
  }
}
