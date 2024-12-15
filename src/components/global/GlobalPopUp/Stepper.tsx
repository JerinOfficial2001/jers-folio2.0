import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  SecondaryTypography,
  TeritaryTypography,
} from "@/components/CustomTypography";
import { IoClose } from "react-icons/io5";
import { flexStyle } from "@/styles/commonStyles";

const steps = [
  {
    label: "Home",
    messages: {
      image: {
        success: "Profile uploaded successfully",
        error: "Profile Image is required",
      },
      name: {
        success: "Profile uploaded successfully",
        error: "Profile Image is required",
      },
      user_name: {
        success: "Profile uploaded successfully",
        error: "Profile Image is required",
      },
      role: {
        success: "Profile uploaded successfully",
        error: "Profile Image is required",
      },
      email: {
        success: "Profile uploaded successfully",
        error: "Profile Image is required",
      },
      links: {
        success: "Profile uploaded successfully",
        error: "Profile Image is required",
      },
      resume: {
        success: "Profile uploaded successfully",
        error: "Profile Image is required",
      },
    },
  },
  {
    label: "About",
    messages: {
      education: {
        success: "Educational informations uploaded successfully",
        error: "Educational informations are required",
      },
      experience: {
        success: "Experiences uploaded successfully",
        error: "Work experience is required",
      },
    },
  },
  {
    label: "Skills",
    messages: {
      default: {
        success: "Skills uploaded successfully",
        error: "Minimum 3 skills are required",
      },
    },
  },
  {
    label: "Contact",
    messages: {
      email: {
        success: "Email filled successfully",
        error: "Email is required",
      },
      address: {
        success: "Profile uploaded successfully",
        error: "Address is required",
      },
    },
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper
        sx={{
          "& .MuiSvgIcon-root": {
            "&.Mui-active": {
              color: "var(--primary)",
              "& .MuiStepIcon-text": { fill: "var(--text)" },
            },
            color: "var(--secondary)",
            "&.Mui-completed": {
              fill: "var(--primary)",
            },
            "& .MuiStepIcon-text": { fill: "var(--disabled)" },
          },
        }}
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              sx={{
                "& .MuiStepLabel-label": {
                  "&.Mui-active": {
                    color: "var(--primary)",
                    fontFamily: "Sora-bold",
                  },
                  fontFamily: "Sora-medium",
                  color: "var(--disabled)",
                  fontSize: "18px",
                  "&.Mui-completed": {
                    color: "var(--primary)",
                  },
                },
              }}
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {Object.keys(step.messages).map((msg: any, msgIndex) => {
                return (
                  <Box sx={{ ...flexStyle("", "", "", "flex-start") }}>
                    <IoClose style={{ color: "red" }} />
                    {/* <TeritaryTypography
                      key={msgIndex}
                      name={step?.messages[msg]?.error}
                      size="xs"
                    /> */}
                  </Box>
                );
              })}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
