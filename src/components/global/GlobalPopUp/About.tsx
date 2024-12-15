import { useGlobalStore } from "@/store/GlobalStore";
import { Grid2, Stack } from "@mui/material";
import React from "react";
import GUploadImages from "../GUploadImages";
import GInput from "../GInput";
import GButton from "../GButton";
import { flexStyle } from "@/styles/commonStyles";
import { PrimaryTypography } from "@/components/CustomTypography";
import { DatePicker, Space } from "antd";

type Props = {};

export default function About({}: Props) {
  const { popUpVariant } = useGlobalStore();
  const aboutFields = [
    {
      label: "Company Name",
      name: "company_name",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "images",
      width: "full",
      isVisible: "Experience",
    },
    {
      label: "Place",
      name: "place",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: "Experience",
    },
    {
      label: "Institution",
      name: "institution",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: "Education",
    },

    {
      label: "Course",
      name: "course",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: "Education",
    },

    {
      label: "Year",
      name: "year",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "datepicker",
      width: "full",
      isVisible: true,
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
        height: "auto",
        overflow: "visible",
      }}
    >
      <Grid2 container sx={{ width: "100%" }} columnGap={1} rowGap={2}>
        <Grid2 size={12} sx={{ ...flexStyle() }}>
          <PrimaryTypography name={"Add " + popUpVariant} />
        </Grid2>
        {aboutFields.map((elem: any, index: number) => {
          if (elem.isVisible == popUpVariant || elem.isVisible == true) {
            if (elem.type == "datepicker") {
              return (
                <Grid2
                  key={index}
                  size={{
                    lg: elem.width == "full" ? 12 : 5.7,
                    sm: 12,
                    xs: 12,
                  }}
                  sx={{ position: "relative" }}
                >
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <DatePicker.RangePicker
                      status="warning"
                      style={{ width: "100%" }}
                      getPopupContainer={(trigger: any) => trigger.parentNode}
                    />
                  </Space>
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
