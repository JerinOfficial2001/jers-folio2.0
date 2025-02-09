import {
  HeaderTypography,
  PrimaryTypography,
  TeritaryTypography,
} from "@/components/CustomTypography";
import { flexStyle } from "@/styles/commonStyles";
import { Box, Container, Grid2, Skeleton, Stack } from "@mui/material";
import React, { useState } from "react";
import GInput from "@/components/global/GInput";
import GButton from "@/components/global/GButton";
import {
  FmdGoodOutlined,
  MailOutline,
  PhoneOutlined,
} from "@mui/icons-material";
import useMuiBreakpoints from "@/hooks/useMuiBreakpoints";
import { useFolioData } from "@/hooks/useFolioData";
import useEnquiryFunction from "@/hooks/functions/useEnquiryFunction";

type Props = { contact: any; isLoading: boolean };

export default function Contact({ contact, isLoading }: Props) {
  const { isxs, issm } = useMuiBreakpoints();

  const [formDatas, setformDatas] = useState<any>({
    email: "",
    phone: "",
    message: "",
    request: "",
    first_name: "",
    last_name: "",
  });
  const { sendingEnquiry, SendEnquiry, errorMsgs } =
    useEnquiryFunction(setformDatas);
  const handleOnchange = (e: any) => {
    const { name, value } = e.target;
    setformDatas((prev: any) => ({ ...prev, [name]: value }));
  };
  const inputs = [
    {
      label: "First name",
      name: "first_name",
      value: formDatas.first_name,
      onChange: handleOnchange,
      isErr: errorMsgs?.first_name,
      errMsg: errorMsgs?.first_name,
      type: "text",
    },
    {
      label: "Last name",
      name: "last_name",
      value: formDatas.last_name,
      onChange: handleOnchange,
      isErr: errorMsgs?.last_name,
      errMsg: errorMsgs?.last_name,
      type: "text",
    },
    {
      label: "Phone number",
      name: "phone",
      value: formDatas.phone,
      onChange: handleOnchange,
      isErr: errorMsgs?.phone,
      errMsg: errorMsgs?.phone,
      type: "number",
    },
    {
      label: "Email address",
      name: "email",
      value: formDatas.email,
      onChange: handleOnchange,
      isErr: errorMsgs?.email,
      errMsg: errorMsgs?.email,
      type: "text",
    },
    {
      label: "--Please choose an option",
      name: "request",
      value: formDatas.request,
      onChange: handleOnchange,
      isErr: errorMsgs?.request,
      errMsg: errorMsgs?.request,
      type: "select",
      options: [],
    },
    {
      label: "Message",
      name: "message",
      value: formDatas.message,
      onChange: handleOnchange,
      isErr: errorMsgs?.message,
      errMsg: errorMsgs?.message,
      type: "largeText",
    },
  ];
  const contactDetails = [
    {
      icon: <PhoneOutlined />,
      lable: "Phone",
      value: contact?.phone,
    },
    {
      icon: <MailOutline />,
      lable: "Email",
      value: contact?.email,
    },
    {
      icon: <FmdGoodOutlined />,
      lable: "Address",
      value: contact?.address,
    },
  ];
  const handleSubmitEnquiry = () => {
    SendEnquiry({
      ...formDatas,
      sendTo: contact.email,
      user_id: contact.user_id,
    });
  };
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
                  <GInput
                    name={elem.name}
                    value={elem.value}
                    onChangeHandler={elem.onChange}
                    placeholder={elem.label}
                    error={elem.isErr}
                    helperText={elem.errMsg}
                  />
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
                  <GInput
                    name={elem.name}
                    value={elem.value}
                    onChangeHandler={elem.onChange}
                    rows={10}
                    multiline={true}
                    placeholder={elem.label}
                    error={elem.isErr}
                    helperText={elem.errMsg}
                  />
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
                  <GInput
                    name={elem.name}
                    value={elem.value}
                    onChangeHandler={elem.onChange}
                    placeholder={elem.label}
                    error={elem.isErr}
                    helperText={elem.errMsg}
                  />
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
            <GButton
              onClickHandler={handleSubmitEnquiry}
              lable="Send message"
              loading={sendingEnquiry}
            />
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
              key={index}
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
                {isLoading ? (
                  <Skeleton
                    variant="text"
                    sx={{
                      background: "var(--skeleton)",
                      width: `${200 + index * 50}px`,
                    }}
                  />
                ) : (
                  <PrimaryTypography
                    name={elem.value?.split(",")?.join(", \n")}
                  />
                )}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}
