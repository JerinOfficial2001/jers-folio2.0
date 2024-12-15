import { useGlobalStore } from "@/store/GlobalStore";
import { Grid2, Stack } from "@mui/material";
import React from "react";
import GUploadImages from "../GUploadImages";
import GInput from "../GInput";
import GButton from "../GButton";
import { flexStyle } from "@/styles/commonStyles";

type Props = {};

export default function WebApp({}: Props) {
  const { popUpVariant } = useGlobalStore();
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
      isVisible: "Website",
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
      isVisible: "Application",
    },
  ];
  return (
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
      {/* <GToggleButton
            handleChange={handleOnchange}
            alignment={popUpVariant}
            buttons={["Website", "Application"]}
            customStyle={{
              width: "180px",
              position: "sticky",
              top: 0,
              zIndex: 1,
            }}
          /> */}
      <Grid2 container sx={{ width: "100%" }} columnGap={1} rowGap={2}>
        {projectFields.map((elem: any, index: number) => {
          if (elem.isVisible == popUpVariant || elem.isVisible == true) {
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
                  <GUploadImages toggleType={popUpVariant} />
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
        <Grid2
          size={{
            lg: 12,
            sm: 12,
            xs: 12,
          }}
          sx={{ ...flexStyle() }}
        >
          <GButton lable="Submit" />
        </Grid2>
      </Grid2>
    </Stack>
  );
}
