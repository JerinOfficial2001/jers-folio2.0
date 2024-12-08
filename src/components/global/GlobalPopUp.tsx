import { useGlobalStore } from "@/store/GlobalStore";
import { Box, Divider, Grid2, Modal, Stack } from "@mui/material";
import React, { useState } from "react";
import { flexStyle } from "@/styles/commonStyles";
import GInput from "./GInput";
import GButton from "./GButton";
import { PrimaryTypography, TeritaryTypography } from "../CustomTypography";
import { useGoogleLogin } from "@react-oauth/google";
import GToggleButton from "./GToggleButton";
import { FemaleImage, MaleImage } from "@/constants/Json";
import { FemaleAvatar, MaleAvatar } from "@/types/interfaces";
import GRadioGroup from "./GRadioGroup";
import GUploadImages from "./GUploadImages";
import { useFormDatatore } from "@/store/FormDataStore";

type Props = {
  variant?: "signUp";
};

export default function GlobalPopUp({ variant }: Props) {
  const {
    openPopUp,
    handleClosePopUp,
    popUpVariant,
    setProfileData,
    profileData,
  } = useGlobalStore();
  const { resetWorkForm } = useFormDatatore();
  const [toggleType, setToggleType] = useState(
    popUpVariant == "project" ? "Website" : "Choose Avatar"
  );
  const handleOnchange = (e: any, value: string) => {
    setToggleType(value);
    resetWorkForm();
  };
  const googleLogin =
    variant == "signUp"
      ? useGoogleLogin({
          onError: () => {},
          onSuccess: (res: any) => {
            const formData = {
              token: res.access_token,
            };
          },
        })
      : () => {};
  const [isAuthTypeChanged, setisAuthTypeChanged] = useState(false);

  const inputs = [
    {
      label: "Profile Picture",
      name: "image",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "file",
      width: "full",
      isVisible: isAuthTypeChanged,
    },

    {
      label: "Name",
      name: "name",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "half",
      isVisible: isAuthTypeChanged,
    },
    {
      label: "User name",
      name: "user_name",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "half",
      isVisible: isAuthTypeChanged,
    },
    {
      label: "Email address",
      name: "email",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: true,
    },
    {
      label: "Password",
      name: "password",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "password",
      width: "full",
      isVisible: true,
    },
  ];
  const projectFields = [
    {
      label: "Images",
      name: "images",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "images",
      width: "full",
      isVisible: true,
    },
    {
      label: "Project Name",
      name: "name",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: true,
    },
    {
      label: "Description",
      name: "description",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: true,
    },
    {
      label: "About",
      name: "about",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "bigText",
      width: "full",
      isVisible: true,
    },
    {
      label: "Link",
      name: "url",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: toggleType == "Website",
    },
    {
      label: "Apk",
      name: "apk",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: toggleType == "Application",
    },
  ];
  return (
    <Modal sx={{ ...flexStyle() }} open={openPopUp} onClose={handleClosePopUp}>
      {variant == "signUp" ? (
        <Stack
          sx={{
            background: "var(--primary)",
            padding: 2,
            gap: 2,
            borderRadius: "10px",
            width: "400px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PrimaryTypography
            name={
              isAuthTypeChanged ? "Welcome to Jers-folio😉" : "Welcome Back! 🚀"
            }
            sx={{ textAlign: "flex-start", width: "100%" }}
          />
          <Grid2 rowGap={2} columnGap={2} container sx={{ width: "100%" }}>
            {inputs.map((elem: any, index: number) => {
              if (elem.isVisible) {
                if (elem.type == "file") {
                  return (
                    <Grid2
                      key={index}
                      size={{
                        lg: 12,
                        md: 12,
                        sm: 12,
                        xs: 12,
                      }}
                    >
                      <GInput placeholder={elem.label} variant="upload" />
                    </Grid2>
                  );
                } else {
                  return (
                    <Grid2
                      key={index}
                      size={{
                        lg: elem.width == "full" ? 12 : 5.7,
                        sm: 12,
                        xs: 12,
                      }}
                    >
                      <GInput placeholder={elem.label} type={elem.type} />
                    </Grid2>
                  );
                }
              }
            })}
          </Grid2>
          <GButton
            lable={isAuthTypeChanged ? "Create Account" : "Login"}
            sx={{
              minWidth: "150px",
            }}
          />
          <Box
            sx={{
              marginBottom: 2,
              ...flexStyle("", 0.5),
            }}
          >
            <TeritaryTypography
              name={`${
                isAuthTypeChanged ? "Already" : "Don't"
              } have an account?`}
            />
            <GButton
              lable={isAuthTypeChanged ? "sign in" : "sign up"}
              variant="teritary"
              size={"sm"}
              onClickHandler={() => {
                setisAuthTypeChanged(!isAuthTypeChanged);
              }}
            />
          </Box>
          <Divider
            sx={{
              borderColor: "var(--text)",
              borderWidth: "1px 100px 0px 100px",
              borderStyle: "none solid",
              height: "1px",
              alignItems: "center",
            }}
          >
            {"( or )"}
          </Divider>
          <GButton
            variant="primary"
            lable="Continue with Google"
            sx={{
              minWidth: "150px",
              color: "var(--text)",
              borderColor: "var(--text)",
              marginTop: 2,
            }}
            startIcon={<Box component="img" src="/svgs/GoogleIcon.svg" />}
            onClickHandler={googleLogin}
          />
        </Stack>
      ) : popUpVariant == "profile" ? (
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
                      profileData.image == elem
                        ? "var(--primary)"
                        : "transparent",
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
      ) : popUpVariant == "project" ? (
        <Stack
          sx={{
            background: "var(--background)",
            padding: 2,
            gap: 2,
            borderRadius: "10px",
            alignItems: "center",
            width: "600px",
            position: "relative",
            height: "80vh",
            overflowY: "auto",
          }}
        >
          <GToggleButton
            handleChange={handleOnchange}
            alignment={toggleType}
            buttons={["Website", "Application"]}
            customStyle={{
              width: "180px",
              position: "sticky",
              top: 0,
              zIndex: 1,
            }}
          />
          <Grid2 container sx={{ width: "100%" }} columnGap={1} rowGap={2}>
            {projectFields.map((elem: any, index: number) => {
              if (elem.isVisible) {
                if (elem.type == "images") {
                  return (
                    <Grid2
                      key={index}
                      size={{
                        lg: elem.width == "full" ? 12 : 5.7,
                        sm: 12,
                        xs: 12,
                      }}
                    >
                      <GUploadImages toggleType={toggleType} />
                    </Grid2>
                  );
                } else if (elem.type == "bigText") {
                  return (
                    <Grid2
                      key={index}
                      size={{
                        lg: elem.width == "full" ? 12 : 5.7,
                        sm: 12,
                        xs: 12,
                      }}
                    >
                      <GInput
                        placeholder={elem.label}
                        type={"text"}
                        multiline={true}
                        rows={10}
                      />
                    </Grid2>
                  );
                } else {
                  return (
                    <Grid2
                      key={index}
                      size={{
                        lg: elem.width == "full" ? 12 : 5.7,
                        sm: 12,
                        xs: 12,
                      }}
                    >
                      <GInput placeholder={elem.label} type={elem.type} />
                    </Grid2>
                  );
                }
              }
            })}
          </Grid2>
        </Stack>
      ) : (
        <div>hello</div>
      )}
    </Modal>
  );
}
