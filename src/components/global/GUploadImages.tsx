import { Box, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import GButton from "./GButton";
import { flexStyle } from "@/styles/commonStyles";
import GlobalCarousel from "./GCarousel";
import { useFormDatatore } from "@/store/FormDataStore";
import GIconButton from "./GIconButton";
import { MdDeleteOutline } from "react-icons/md";

type Props = { toggleType?: string; type?: string };

export default function GUploadImages({ toggleType, type }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { workFormData, setWorkFormData } = useFormDatatore();
  const files: File[] = workFormData.images;
  const primaryImage = workFormData.primaryImage;
  const isSingleImageUpload = type && type == "image";
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles: any = event.target.files;
    if (!isSingleImageUpload && selectedFiles && selectedFiles.length > 0) {
      // Filter out files that are not images
      const imageFiles = Array.from(selectedFiles).filter(
        (file: any) => file.type.startsWith("image/") // Only include files with image MIME type
      );

      setWorkFormData("images", [...imageFiles, ...files]); // Update state with valid image files
    }

    if (isSingleImageUpload) {
      setWorkFormData("icon", selectedFiles[0]);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleClearFile = () => {
    // setfile(null);
  };
  const handleDelete = () => {
    if (workFormData.images[workFormData.primaryImage as any] instanceof File) {
      setWorkFormData(
        "images",
        workFormData.images.filter(
          (_, index) => index != workFormData.primaryImage
        )
      );
    } else {
      const id =
        workFormData.images[workFormData.primaryImage as any]?.public_id;

      if (id && !workFormData.imageIds.includes(id)) {
        setWorkFormData("imageIds", [...workFormData.imageIds, id]);
      }
      setWorkFormData(
        "images",
        workFormData.images.filter((elem: any) => elem.public_id != id)
      );
    }
    setWorkFormData("primaryImage", 0);
  };
  const defaultIconStyle = {
    color: "var(--disabled)",
    height: isSingleImageUpload
      ? "100px"
      : toggleType == "website"
      ? "100px"
      : "150px",
    width: isSingleImageUpload
      ? "100px"
      : toggleType == "website"
      ? "200px"
      : "100px",
    borderRadius: isSingleImageUpload ? "50%" : "10px",
    background: "var(--cardBg)",
    ...flexStyle(),
    padding: 1,
    overflow: "hidden",
    border: !isSingleImageUpload ? "1.5px dashed var(--primary)" : "none",
  };
  const cardVarient: any = toggleType;
  const imageArr: any = files || workFormData.images;
  const imgSrc =
    workFormData.icon instanceof File
      ? URL.createObjectURL(workFormData.icon)
      : workFormData.icon?.url
      ? workFormData.icon?.url
      : toggleType == "website"
      ? "/global/website.png"
      : "/global/android.png";
  return (
    <Stack
      sx={{
        width: "100%",
        justifyContent: "center",
        gap: 5,
        alignItems: "center",
        // height: !isSingleImageUpload && files.length > 0 ? "300px" : "150px",
        border: !isSingleImageUpload ? "2px dashed var(--text)" : "none",
        borderRadius: "10px",
        padding: 1,
      }}
      direction={"column"}
    >
      <Box sx={{ ...flexStyle("", 10) }}>
        <Box sx={{ ...defaultIconStyle }}>
          {isSingleImageUpload ? (
            <Box
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
                filter: !workFormData.icon ? "grayscale(1)" : "none",
              }}
              component={"img"}
              src={imgSrc}
            />
          ) : imageArr[primaryImage] ? (
            <Box
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                objectFit: "contain",
              }}
              component={"img"}
              src={
                imageArr[primaryImage]?.url
                  ? imageArr[primaryImage]?.url
                  : imageArr[primaryImage]
                  ? URL.createObjectURL(imageArr[primaryImage])
                  : "/svgs/user.svg"
              }
            />
          ) : (
            <IoImageOutline style={{ height: "100%", width: "100%" }} />
          )}
        </Box>
        <Box sx={{ ...flexStyle("", 1) }}>
          <GButton
            onClickHandler={handleButtonClick}
            lable="Upload"
            variant="outlined"
            size={"small"}
            sx={{ border: "2px solid var(--text )" }}
          />
          {!isSingleImageUpload && workFormData.images.length > 1 && (
            <GIconButton
              toolTipPlacement={"top"}
              icon={<MdDeleteOutline />}
              title={"Delete"}
              onClickHandler={handleDelete}
              sx={{ color: "red", border: "none" }}
            />
          )}
        </Box>
      </Box>
      {!isSingleImageUpload && imageArr.length > 0 && (
        <Box sx={{ width: "100%", height: "150px" }}>
          <GlobalCarousel
            next="mini-next"
            prev="mini-prev"
            cardVariant={cardVarient}
            variant="mini-website"
            data={imageArr.map((elem: any, index: number) => ({
              image: elem?.url ? elem.url : URL.createObjectURL(elem),
              isSelected: index == primaryImage,
            }))}
          />
        </Box>
      )}

      <input
        type="file"
        multiple // Allow multiple file selection
        accept="image/*" // Only allow image files
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
    </Stack>
  );
}
