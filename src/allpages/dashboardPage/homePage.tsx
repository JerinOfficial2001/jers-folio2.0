"use client";
import { TeritaryTypography } from "@/components/CustomTypography";
import GInput from "@/components/global/GInput";
import GRadioGroup from "@/components/global/GRadioGroup";
import { FemaleImage, links, MaleImage } from "@/constants/Json";
import { useGlobalStore } from "@/store/GlobalStore";
import { FemaleAvatar, linkKey, MaleAvatar } from "@/types/interfaces";
import { Box, Container, Grid2, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import GCrudInput from "@/components/global/GCrudInput";
import { flexStyle } from "@/styles/commonStyles";
import GButton from "@/components/global/GButton";
import { IoIosSave } from "react-icons/io";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getUser, updateUser } from "@/services/user";
import { useFormDatatore } from "@/store/FormDataStore";
import { handleArrayOfObjectFormData, handleFormData } from "@/helpers";

type Props = {};

export default function HomePage({}: Props) {
  const { handleOpenPopUp } = useGlobalStore();
  const { profileData, setProfileData } = useFormDatatore();
  const {
    data: User,
    isLoading: userLoading,
    error: userError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  const { mutate: SaveUser, isPending: saveLoading } = useMutation({
    mutationKey: ["saveUser"],
    mutationFn: (data: any) => updateUser(data?.payload, data?.id),
  });
  const handleOnchange = (e: any) => {
    const { name, value } = e.target;
    setProfileData({ key: name, value });
  };
  useEffect(() => {
    if (User) {
      const profileKeys = Object.keys(profileData);
      Object.keys(User).forEach((elem: any) => {
        if (profileKeys.includes(elem))
          setProfileData({ key: elem, value: User[elem] || "" });
      });
    }
  }, [User]);
  const fields = [
    {
      label: "Name",
      name: "name",
      onChange: handleOnchange,
      value: profileData.name,
      type: "text",
      size: 5.9,
    },
    {
      label: "Username",
      name: "username",
      onChange: handleOnchange,
      value: profileData.username,
      type: "text",
      size: 5.9,
    },
    {
      label: "Gender",
      name: "gender",
      onChange: handleOnchange,
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
      onChange: handleOnchange,
      value: profileData.role,
      type: "text",
      size: 5.9,
    },
    {
      label: "Email",
      name: "email",
      onChange: handleOnchange,
      value: profileData.email,
      type: "email",
      size: 12,
    },
  ];
  const handleSaveUser = () => {
    const formData = new FormData();
    let tempData: any = { ...profileData };
    delete tempData.links;
    delete tempData.resumes;
    delete tempData.resumeIds;
    profileData.resumes.forEach((resume: any) => {
      if (resume.file) formData.append("pdf", resume.file);
    });

    if (profileData?.links.length > 0) {
      handleArrayOfObjectFormData(profileData.links, formData, "links");
    }
    if (profileData?.resumeIds.length > 0) {
      profileData.resumeIds.forEach((elem: any) => {
        formData.append("resumeIds[]", elem);
      });
    }
    handleFormData(tempData, formData);
    SaveUser({ payload: formData, id: User?._id });
    setProfileData({
      key: "resumeIds",
      value: [],
    });
  };

  const ImageSrc: any = profileData.image?.url
    ? profileData.image?.url
    : profileData?.image instanceof File
    ? URL.createObjectURL(profileData?.image)
    : profileData.gender == "male"
    ? MaleImage[profileData.image as keyof MaleAvatar]
    : FemaleImage[profileData.image as keyof FemaleAvatar];

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
          <GButton
            onClickHandler={handleSaveUser}
            lable="Save"
            startIcon={<IoIosSave />}
          />
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
                  borderRadius: "50%",
                }}
                component={"img"}
                src={ImageSrc}
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
                      value={elem.value}
                      onChangeHandler={elem.onChange}
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
            value={profileData.about}
            onChangeHandler={handleOnchange}
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
    </Stack>
  );
}
