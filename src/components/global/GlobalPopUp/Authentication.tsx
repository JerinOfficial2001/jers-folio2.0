import {
  PrimaryTypography,
  TeritaryTypography,
} from "@/components/CustomTypography";
import { Box, Divider, Grid2, Stack } from "@mui/material";
import { useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import GInput from "../GInput";
import GButton from "../GButton";
import { flexStyle } from "@/styles/commonStyles";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login, register } from "@/services/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { errorHandler } from "@/utils/errorHandler";
import { useGlobalStore } from "@/store/GlobalStore";
import useErrorHandler from "@/hooks/useErrorHandler";
import { handleFormData } from "@/helpers";

type Props = {};

export default function Authentication({}: Props) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [authType, setauthType] = useState("");
  const [inputDatas, setinputDatas] = useState<any>({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const { handleClosePopUp, handleOpenPopUp, profileData } = useGlobalStore();
  const { errorMsgs, handleErrors } = useErrorHandler();
  const { mutate: handleLogin, isPending: loginProcessing } = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      toast.success(res.message);
      router.push("/dashboard");
      handleClosePopUp();
    },
    onError: (res: any) => {
      handleErrors(res);
    },
  });
  const { mutate: handleRegister, isPending: registerProcessing } = useMutation(
    {
      mutationFn: register,
      onSuccess: (res: any) => {
        toast.success("Logged In Successfully");
        router.push("/dashboard");
        handleClosePopUp();
      },
      onError: (res: any) => {
        handleErrors(res);
      },
    }
  );
  const googleLogin = useGoogleLogin({
    onError: () => {},
    onSuccess: (res: any) => {
      setauthType("google");
      handleLogin({
        access_token: res.access_token,
      });
    },
  });
  const [isAuthTypeChanged, setisAuthTypeChanged] = useState(false);
  const handleOnchange = (e: any) => {
    const { name, value } = e.target;
    setinputDatas((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const inputs = [
    // {
    //   label: "Profile Picture",
    //   name: "image",
    //   onChange: handleOnchange,
    //   isErr: false,
    //   errMsg: "Please fill out this field.",
    //   type: "file",
    //   width: "full",
    //   isVisible: isAuthTypeChanged,
    // },

    {
      label: "Name",
      name: "name",
      value: inputDatas.name,
      onChange: handleOnchange,
      isErr: errorMsgs?.name,
      errMsg: errorMsgs?.name,
      type: "text",
      width: "half",
      isVisible: isAuthTypeChanged,
    },
    {
      label: "User name",
      name: "username",
      value: inputDatas.username,
      onChange: handleOnchange,
      isErr: errorMsgs?.username,
      errMsg: errorMsgs?.username,
      type: "text",
      width: "half",
      isVisible: isAuthTypeChanged,
    },
    {
      label: "Email address",
      name: "email",
      value: inputDatas.email,
      onChange: handleOnchange,
      isErr: errorMsgs?.email,
      errMsg: errorMsgs?.email,
      type: "text",
      width: "full",
      isVisible: true,
    },
    {
      label: "Password",
      name: "password",
      value: inputDatas.password,
      onChange: handleOnchange,
      isErr: false,
      errMsg: errorMsgs?.password,
      type: errorMsgs?.password,
      width: "full",
      isVisible: true,
    },
  ];
  useEffect(() => {
    setauthType("");
  }, []);
  const handleSubmit = () => {
    setauthType("normal");
    if (isAuthTypeChanged) {
      const formData = new FormData();
      if (profileData.image) {
        formData.append("image", profileData.image);
      }
      handleFormData(inputDatas, formData);
      handleRegister(formData);
    } else {
      handleLogin({
        email: inputDatas.email,
        password: inputDatas.password,
      });
    }
  };
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
                  <GInput
                    direction="row"
                    placeholder={elem.label}
                    variant="upload"
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
                  <GInput
                    placeholder={elem.label}
                    type={elem.type}
                    name={elem.name}
                    value={elem.value}
                    onChangeHandler={elem.onChange}
                    error={elem.isErr}
                    helperText={elem.errMsg}
                  />
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
        loading={
          authType == "normal" ? loginProcessing || registerProcessing : false
        }
        onClickHandler={handleSubmit}
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
        loading={authType == "google" ? loginProcessing : false}
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
