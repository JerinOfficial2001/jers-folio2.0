"use client";
import { FemaleImage, MaleImage } from "@/app/constants/Json";
import { useGlobalStore } from "@/app/store/GlobalStore";
import { FemaleAvatar, MaleAvatar } from "@/app/types/interfaces";
import { Box, Grid2 } from "@mui/material";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
type Props = {};

export default function HomePage({}: Props) {
  const { handleOpenPopUp, profileData } = useGlobalStore();
  return (
    <Grid2 container sx={{ width: "100%" }}>
      <Grid2
        size={{
          md: 6,
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            position: "relative",
            height: "150px",
            width: "150px",
          }}
        >
          <Box
            onClick={() => handleOpenPopUp("profile")}
            sx={{
              background: "var(--cardBg)",
              "&:hover": {
                background: "var(--hover)",
              },
              height: "100%",
              width: "100%",
              borderRadius: "50%",
              position: "absolute",
              transition: ".3s",
            }}
          />
          {profileData.image && profileData.gender ? (
            <Box
              sx={{
                height: "100%",
                width: "100%",
              }}
              component={"img"}
              src={
                profileData.gender == "male"
                  ? MaleImage[profileData.image as keyof MaleAvatar]
                  : FemaleImage[profileData.image as keyof FemaleAvatar]
              }
            />
          ) : (
            <FaUserCircle
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          )}
        </Box>
      </Grid2>
    </Grid2>
  );
}
