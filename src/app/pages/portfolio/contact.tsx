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
import useMuiBreakpoints from "@/app/hooks/useMuiBreakpoints";

type Props = {};

export default function Contact({}: Props) {
  const { isxs, issm } = useMuiBreakpoints();

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
        ...flexStyle(
          { md: "row", sm: "column", xs: "column" },
          { md: 15, sm: 2, xs: 2 },
          "",
          "space-between"
        ),
        minHeight: "90dvh",
        paddingBottom: { md: 15, sm: 5, xs: 5 },
      }}
      id="contact"
      maxWidth={isxs || issm ? "xl" : "lg"}
    >
      <Stack
        gap={"30px"}
        sx={{
          width: { md: "60%", sm: "100%", xs: "100%" },
          background: "var(--cardBg)",
          marginTop: { md: 15, sm: 5, xs: 5 },
          borderRadius: 5,
          padding: { md: "90px 50px", sm: "10px", xs: "10px" },
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
                    md: 12,
                    sm: 12,
                    xs: 12,
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
                    sm: 12,
                    xs: 12,
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
                    sm: 12,
                    xs: 12,
                  }}
                >
                  <GInput placeholder={elem.label} />
                </Grid2>
              );
            }
          })}
          <Grid2
            size={{ lg: 6, sm: 12, xs: 12 }}
            sx={{
              display: "flex",
              justifyContent: { md: "flex-start", sm: "center", xs: "center" },
            }}
          >
            <GButton lable="Send message" />
          </Grid2>
        </Grid2>
      </Stack>
      <Stack
        gap={"30px"}
        sx={{
          width: { md: "40%", sm: "100%", xs: "100%" },
          marginTop: { md: 15, sm: 5, xs: 5 },
        }}
      >
        {contactDetails.map((elem: any, index: number) => {
          return (
            <Box
              sx={{
                ...flexStyle("", 1, "center", "flex-start"),
                marginLeft: { md: 0, sm: 10, xs: 3 },
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
