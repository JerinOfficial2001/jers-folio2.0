import { Box, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import GButton from "./GButton";
import { flexStyle } from "@/styles/commonStyles";
import GlobalCarousel from "./GCarousel";
import { useFormDatatore } from "@/store/FormDataStore";

type Props = { toggleType?: string };

export default function GUploadImages({ toggleType }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { workFormData, setWorkFormData } = useFormDatatore();
  const files: File[] = workFormData.images;
  const primaryImage = workFormData.primaryImage;
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      // Filter out files that are not images
      const imageFiles = Array.from(selectedFiles).filter(
        (file) => file.type.startsWith("image/") // Only include files with image MIME type
      );

      setWorkFormData("images", [...imageFiles, ...files]); // Update state with valid image files
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

  const defaultIconStyle = {
    color: "var(--disabled)",
    height: toggleType == "Website" ? "100px" : "150px",
    width: toggleType == "Website" ? "200px" : "100px",
    borderRadius: "10px",
    background: "var(--cardBg)",
    ...flexStyle(),
    padding: 1,
  };
  const cardVarient: any = toggleType?.toLowerCase();
  return (
    <Stack
      sx={{
        width: "100%",
        justifyContent: "center",
        gap: 5,
        alignItems: "center",
        height: files.length > 0 ? "400px" : "150px",
      }}
      direction={"column"}
    >
      <Box sx={{ ...flexStyle("", 10) }}>
        <Box sx={{ ...defaultIconStyle }}>
          {files[primaryImage] ? (
            <Box
              sx={{
                height: "100%",
                width: "100%",
                borderRadius: "10px",
                objectFit: "contain",
              }}
              component={"img"}
              src={
                files[primaryImage]
                  ? URL.createObjectURL(files[primaryImage])
                  : "/svgs/user.svg"
              }
            />
          ) : (
            <IoImageOutline style={{ height: "100%", width: "100%" }} />
          )}
        </Box>
        <GButton
          onClickHandler={handleButtonClick}
          lable="Upload"
          variant="outlined"
          size={"small"}
          sx={{ border: "2px solid var(--text )" }}
        />
      </Box>
      {files.length > 0 && (
        <Box sx={{ width: "100%", height: "150px" }}>
          <GlobalCarousel
            next="mini-next"
            prev="mini-prev"
            cardVariant={cardVarient}
            variant="mini-website"
            data={files.map((elem, index) => ({
              image: URL.createObjectURL(elem),
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
