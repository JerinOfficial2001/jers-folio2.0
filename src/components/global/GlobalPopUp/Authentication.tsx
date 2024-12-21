import {
  PrimaryTypography,
  TeritaryTypography,
} from "@/components/CustomTypography";
import { Box, Divider, Grid2, Stack } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import GInput from "../GInput";
import GButton from "../GButton";
import { flexStyle } from "@/styles/commonStyles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/services/auth";

type Props = {};

export default function Authentication({}: Props) {
  const queryClient = useQueryClient();

  const { mutate: handleLogin, isPending: loginProcessing } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
  });
  const googleLogin = useGoogleLogin({
    onError: () => {},
    onSuccess: (res: any) => {
      handleLogin({
        access_token: res.access_token,
      });
    },
  });
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
  return (
    <Stack
      sx={{
        background: "var(--secondary)",
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
          ...flexStyle("", 0.3),
        }}
      >
        <TeritaryTypography
          name={`${isAuthTypeChanged ? "Already" : "Don't"} have an account?`}
        />
        <GButton
          lable={isAuthTypeChanged ? "sign in" : "sign up"}
          variant="teritary"
          size={"sm"}
          onClickHandler={() => {
            setisAuthTypeChanged(!isAuthTypeChanged);
          }}
          sx={{ padding: 0 }}
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
        loading={loginProcessing}
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
  );
}
