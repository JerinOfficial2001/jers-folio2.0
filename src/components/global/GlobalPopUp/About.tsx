import { useGlobalStore } from "@/store/GlobalStore";
import { Grid2, Stack } from "@mui/material";
import React from "react";
import GInput from "../GInput";
import GButton from "../GButton";
import { flexStyle } from "@/styles/commonStyles";
import { PrimaryTypography } from "@/components/CustomTypography";
import { DatePicker, Space } from "antd";
import { useFormDatatore } from "@/store/FormDataStore";
import dayjs from "dayjs";
import useAboutFunction from "@/hooks/functions/useAboutFunction";

type Props = {};

export default function About({}: Props) {
  const { popUpVariant } = useGlobalStore();
  const {
    expirenceFormData,
    setExpirenceFormData,
    educationFormData,
    setEducationFormData,
  } = useFormDatatore();
  const { AddEducation, AddExperience, creatingEducation, creatingExperience } =
    useAboutFunction();
  const handleEducationOnchange = (e: any) => {
    const { name, value } = e.target;
    setEducationFormData(name, value);
  };
  const handleExperienceOnchange = (e: any) => {
    const { name, value } = e.target;
    setExpirenceFormData(name, value);
  };
  const aboutFields = [
    {
      label: "Company Name",
      name: "company_name",
      value: expirenceFormData.company_name,
      onChange: (e: any) => handleExperienceOnchange(e),
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: "Experience",
    },
    {
      label: "Place",
      name: "place",
      value: expirenceFormData.place,
      onChange: (e: any) => handleExperienceOnchange(e),
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: "Experience",
    },
    {
      label: "Institution",
      name: "institution",
      value: educationFormData.institution,
      onChange: (e: any) => handleEducationOnchange(e),
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: "Education",
    },

    {
      label: "Course",
      name: "course",
      value: educationFormData.course,
      onChange: (e: any) => handleEducationOnchange(e),
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
      width: "full",
      isVisible: "Education",
    },

    {
      label: "Year",
      name: "year",
      value:
        popUpVariant != "Education"
          ? expirenceFormData.year
          : educationFormData.year,
      onChange: (e: any, dateRange: any) => {
        popUpVariant != "Education"
          ? setExpirenceFormData("year", dateRange)
          : setEducationFormData("year", dateRange);
      },
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "datepicker",
      width: "full",
      isVisible: true,
    },
  ];
  const handleSubmit = () => {
    if (popUpVariant == "Education") {
      AddEducation(educationFormData);
    } else {
      AddExperience(expirenceFormData);
    }
  };
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
              const Value =
                elem.value.length > 0
                  ? elem.value.map((date: any) => dayjs(date, "YYYY-MM-DD"))
                  : [];

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
                      name={elem.name}
                      value={Value}
                      onChange={elem.onChange}
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
                  <GInput
                    name={elem.name}
                    value={elem.value}
                    onChangeHandler={elem.onChange}
                    placeholder={elem.label}
                    type={elem.type}
                  />
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
          <GButton onClickHandler={handleSubmit} lable="Submit" />
        </Grid2>
      </Grid2>
    </Stack>
  );
}
