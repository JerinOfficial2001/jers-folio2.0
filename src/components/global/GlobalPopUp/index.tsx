import { useGlobalStore } from "@/store/GlobalStore";
import { Box, Divider, Grid2, Modal, Stack } from "@mui/material";
import React, { useState } from "react";
import { flexStyle } from "@/styles/commonStyles";
import GInput from "../GInput";
import GButton from "../GButton";
import { PrimaryTypography, TeritaryTypography } from "../../CustomTypography";
import { useGoogleLogin } from "@react-oauth/google";
import GToggleButton from "../GToggleButton";
import { FemaleImage, MaleImage } from "@/constants/Json";
import { FemaleAvatar, MaleAvatar } from "@/types/interfaces";
import GRadioGroup from "../GRadioGroup";
import GUploadImages from "../GUploadImages";
import { useFormDatatore } from "@/store/FormDataStore";
import WebApp from "./WebApp";
import Authentication from "./Authentication";
import Profile from "./Profile";
import Progress from "./Progress";
import About from "./About";

type Props = {
  variant?: "signUp";
};

export default function GlobalPopUp({ variant }: Props) {
  const { openPopUp, handleClosePopUp, popUpVariant, resetGlobalStore } =
    useGlobalStore();
  const { resetForm } = useFormDatatore();

  return (
    <Modal
      sx={{
        overflow: "visible",
        ...flexStyle(
          "",
          "",
          "",
          popUpVariant == "progress" ? "flex-end" : "center"
        ),
        backdropFilter: popUpVariant == "progress" ? "none" : "blur(3px)",
        "& .MuiBackdrop-root": {
          background: popUpVariant == "progress" ? "transparent" : "auto",
        },
      }}
      open={openPopUp}
      onClose={() => {
        resetGlobalStore("id");
        resetForm("workFormData");
        handleClosePopUp();
      }}
    >
      {variant == "signUp" ? (
        <Authentication />
      ) : popUpVariant == "profile" ? (
        <Profile />
      ) : popUpVariant == "website" || popUpVariant == "application" ? (
        <WebApp />
      ) : popUpVariant == "progress" ? (
        <Progress />
      ) : popUpVariant == "Education" || popUpVariant == "Experience" ? (
        <About />
      ) : (
        <div>hello</div>
      )}
    </Modal>
  );
}
