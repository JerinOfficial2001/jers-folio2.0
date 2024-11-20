import {
  HeaderTypography,
  PrimaryTypography,
  TeritaryTypography,
} from "@/app/components/CustomTypography";
import GlobalCarousel from "@/app/components/global/GCarousel";
import AboutCard from "@/app/components/portfolioComponents/AboutCard";
import { flexStyle } from "@/app/styles/commonStyles";
import { Box, Container, Grid2, Stack } from "@mui/material";
import React from "react";
import GInput from "../../components/global/GInput";
import GButton from "@/app/components/global/GButton";
import {
  FmdGoodOutlined,
  MailOutline,
  PhoneOutlined,
} from "@mui/icons-material";

type Props = {};

export default function Contact({}: Props) {
  const inputs = [
    {
      label: "First name",
      name: "first_name",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
    },
    {
      label: "Last name",
      name: "last_name",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
    },
    {
      label: "Phone number",
      name: "phone",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "number",
    },
    {
      label: "Email address",
      name: "email",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "text",
    },
    {
      label: "--Please choose an option",
      name: "required_role",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "select",
      options: [],
    },
    {
      label: "Message",
      name: "messgae",
      value: "",
      onChange: "",
      isErr: false,
      errMsg: "Please fill out this field.",
      type: "largeText",
    },
  ];
  const contactDetails = [
    {
      icon: <PhoneOutlined />,
      lable: "Phone",
      value: "+91 9384912517",
    },
    {
      icon: <MailOutline />,
      lable: "Email",
      value: "jerinofficial25@gmail.com",
    },
    {
      icon: <FmdGoodOutlined />,
      lable: "Address",
      value: "Pudupeerkadavu,Erode - 638451",
    },
  ];
  return (
    <Container
      sx={{
        ...flexStyle("row", 15, "", "space-between"),
        padding: "140px 160px !important",
      }}
      id="contact"
      maxWidth={"xl"}
    >
      <Stack
        gap={"30px"}
        sx={{
          width: "60%",
          background: "var(--cardBg)",
          padding: "90px 50px",
          borderRadius: 5,
        }}
      >
        <HeaderTypography
          name="Let’s work together!"
          variant="teritary"
          size="lg"
        />
        <Grid2 rowGap={2} columnGap={2} container sx={{ width: "100%" }}>
          {inputs.map((elem: any, index: number) => {
            if (elem.type == "select") {
              return (
                <Grid2
                  key={index}
                  size={{
                    lg: 12,
                  }}
                >
                  <GInput placeholder={elem.label} />
                </Grid2>
              );
            } else if (elem.type == "largeText") {
              return (
                <Grid2
                  key={index}
                  size={{
                    lg: 12,
                  }}
                >
                  <GInput rows={10} multiline={true} placeholder={elem.label} />
                </Grid2>
              );
            } else {
              return (
                <Grid2
                  key={index}
                  size={{
                    lg: 5.8,
                  }}
                >
                  <GInput placeholder={elem.label} />
                </Grid2>
              );
            }
            return (
              <Grid2
                key={index}
                size={{
                  lg: 5.8,
                }}
              >
                <GInput placeholder={elem.label} />
              </Grid2>
            );
          })}
          <Grid2 size={{ lg: 6 }}>
            <GButton lable="Send message" />
          </Grid2>
        </Grid2>
      </Stack>
      <Stack
        gap={"30px"}
        sx={{
          width: "40%",
        }}
      >
        {contactDetails.map((elem: any, index: number) => {
          return (
            <Box
              sx={{
                ...flexStyle("", 1, "flex-start", "flex-start"),
              }}
            >
              <Box
                sx={{
                  height: "50px",
                  width: "50px",
                  background: "var(--buttonTeritary)",
                  borderRadius: "50%",
                  color: "var(--text)",
                  ...flexStyle(),
                }}
              >
                {elem.icon}
              </Box>
              <Stack>
                <TeritaryTypography name={elem.lable} />
                <PrimaryTypography name={elem.value.split(",").join(", \n")} />
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}
