"use client";
import { TeritaryTypography } from "@/components/CustomTypography";
import GInput from "@/components/global/GInput";
import GRadioGroup from "@/components/global/GRadioGroup";
import { FemaleImage, links, MaleImage } from "@/constants/Json";
import { useGlobalStore } from "@/store/GlobalStore";
import { FemaleAvatar, linkKey, MaleAvatar } from "@/types/interfaces";
import { Box, Container, Grid2, Stack } from "@mui/material";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import GCrudInput from "@/components/global/GCrudInput";
import { flexStyle } from "@/styles/commonStyles";
import GButton from "@/components/global/GButton";
import { IoIosSave } from "react-icons/io";

type Props = {};

export default function HomePage({}: Props) {
  const { handleOpenPopUp, profileData, setProfileData } = useGlobalStore();
  const fields = [
    {
      label: "Name",
      name: "name",
      onChange: () => {},
      value: "",
      type: "text",
      size: 5.9,
    },
    {
      label: "Username",
      name: "user_name",
      onChange: () => {},
      value: "",
      type: "text",
      size: 5.9,
    },
    {
      label: "Gender",
      name: "gender",
      onChange: (e: any) =>
        setProfileData({ key: "gender", value: e.target.value }),
      value: profileData.gender,
      type: "radio",
      content: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
      size: 5.9,
    },
    {
      label: "Role",
      name: "role",
      onChange: () => {},
      value: "",
      type: "text",
      size: 5.9,
    },
    {
      label: "Email",
      name: "email",
      onChange: () => {},
      value: "",
      type: "email",
      size: 12,
    },
  ];
  return (
    <Stack
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Grid2 container rowGap={1} columnGap={1} sx={{ width: "80%" }}>
        <Grid2
          size={{
            md: 12,
          }}
          sx={{ ...flexStyle("", "", "", "flex-end") }}
        >
          <GButton lable="Save" startIcon={<IoIosSave />} />
        </Grid2>
        <Grid2
          size={{
            md: 3,
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
                  background: "var(--cardBg)",
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
        <Grid2
          size={{
            md: 8.86,
          }}
        >
          <Grid2 container rowGap={1} columnGap={1}>
            {fields.map((elem: any, index: number) => {
              if (elem.type == "radio") {
                return (
                  <Grid2 size={{ md: elem.size }} key={index}>
                    <TeritaryTypography name={"Gender"} size="xs" />
                    <GRadioGroup
                      name={elem.name}
                      inputs={elem.content}
                      value={elem.value}
                      onChange={elem.onChange}
                    />
                  </Grid2>
                );
              } else {
                return (
                  <Grid2 size={{ md: elem.size }} key={index}>
                    <GInput
                      name={elem.name}
                      placeholder={elem.label}
                      type={elem.type}
                    />
                  </Grid2>
                );
              }
            })}
          </Grid2>
        </Grid2>
        <Grid2 size={{ md: 12 }}>
          <GInput
            name={"about"}
            placeholder={"About"}
            type={"text"}
            multiline={true}
            rows={10}
          />
        </Grid2>
        <Grid2 size={{ md: 12 }}>
          <GCrudInput
            options={Object.keys(links).map((key) => ({
              value: key,
              ...links[key as keyof linkKey],
            }))}
            label="Links"
          />
        </Grid2>
        <Grid2 size={{ md: 12 }}>
          <GCrudInput
            options={Object.keys(links).map((key) => ({
              value: key,
              ...links[key as keyof linkKey],
            }))}
            varient="resume"
            label="Resume"
          />
        </Grid2>
      </Grid2>
      {/* <Stack
        sx={{
          width: "30%",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "30%",
            height: "300px",
            position: "fixed",
            right: 10,
            borderRadius: "10px",
          }}
        >
          <Container>
            <HeroSection isComponent={true} />
          </Container>
        </Box>
      </Stack> */}
    </Stack>
  );
}
