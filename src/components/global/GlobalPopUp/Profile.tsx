import React, { useState } from "react";
import GButton from "../GButton";
import { Box, Grid2, Stack } from "@mui/material";
import { useGlobalStore } from "@/store/GlobalStore";
import GToggleButton from "../GToggleButton";
import GRadioGroup from "../GRadioGroup";
import { FemaleImage, MaleImage } from "@/constants/Json";
import { FemaleAvatar, MaleAvatar } from "@/types/interfaces";

type Props = {};

export default function Profile({}: Props) {
  const { handleClosePopUp, setProfileData, profileData } = useGlobalStore();
  const [toggleType, setToggleType] = useState("Choose Avatar");
  const handleOnchange = (e: any, value: string) => {
    setToggleType(value);
  };
  return (
    <Stack
      sx={{
        background: "var(--background)",
        padding: 2,
        gap: 2,
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
        paddingX: 3,
        width: "600px",
        position: "relative",
        height: "80vh",
        overflowY: "auto",
      }}
    >
      <GToggleButton
        handleChange={handleOnchange}
        alignment={toggleType}
        buttons={["Choose Avatar", "Upload Image"]}
        customStyle={{
          width: "230px",
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
      />

      <Grid2
        container
        sx={{
          width: "100%",
        }}
        rowGap={2.8}
        columnGap={2.8}
      >
        <Grid2
          size={{ md: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: profileData.gender == "male" ? "200px" : "315px",
          }}
        ></Grid2>
        <Grid2
          size={{ md: 12 }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "sticky",
            top: 50,
          }}
        >
          <GRadioGroup
            inputs={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
            name="gender"
            onChange={(e: any) =>
              setProfileData({ key: "gender", value: e.target.value })
            }
            value={profileData.gender}
          />
        </Grid2>
        {Object.keys(
          profileData.gender == "male" ? MaleImage : FemaleImage
        ).map((elem: any, index: number) => {
          return (
            <Grid2
              key={index}
              size={{
                md: 2,
              }}
              sx={{
                borderRadius: "50%",
                outline: "none",
                background:
                  profileData.image == elem ? "var(--primary)" : "transparent",
              }}
              onClick={() => setProfileData({ key: "image", value: elem })}
            >
              <Box
                sx={{
                  "&:hover": {
                    padding: 1,
                  },
                  cursor: "pointer",
                  borderRadius: "50%",
                  padding: profileData.image == elem ? 1 : 0,
                  transition: ".3s",
                  outline: "none",
                }}
                component={"img"}
                src={
                  profileData.gender == "male"
                    ? MaleImage[elem as keyof MaleAvatar]
                    : FemaleImage[elem as keyof FemaleAvatar]
                }
              />
            </Grid2>
          );
        })}
      </Grid2>
      {profileData.image && (
        <GButton
          lable="Submit"
          sx={{ position: "sticky", bottom: 0, zIndex: 1 }}
          variant="contained"
          onClickHandler={handleClosePopUp}
        />
      )}
    </Stack>
  );
}
