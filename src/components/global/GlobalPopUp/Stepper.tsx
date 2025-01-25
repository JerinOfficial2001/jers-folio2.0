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
import { Chip } from "@mui/material";

const steps = [
  {
    commit_msg: "Home",
  },
  {
    commit_msg: "About",
  },
  {
    commit_msg: "Skills",
  },
  {
    commit_msg: "Contact",
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

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
    <Box sx={{ width: "100%" }}>
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
          // "& .MuiStepConnector-root": {
          //   display: "none !important",
          // },
        }}
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((step, index) => (
          <Step
            onClick={() => {
              setActiveStep(index);
            }}
            key={index}
            sx={{ cursor: "pointer" }}
          >
            <StepLabel
              className="Mui-active"
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
              {step.commit_msg}
            </StepLabel>
            <StepContent
              sx={{
                "& .MuiCollapse-root": {
                  border: "1.5px dashed var(--text)",
                  position: "relative",
                  borderRadius: "10px",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              <TeritaryTypography
                sx={{ position: "absolute", right: 3 }}
                name={"10:25PM"}
                size="xs"
              />
              <TeritaryTypography name={"Hello world"} />
              <Box sx={{ ...flexStyle("", "3px", "", "flex-start") }}>
                <Chip
                  label="Sat"
                  sx={{
                    background: "var(--primary)",
                    fontFamily: "Sora-bold",
                    textTransform: "uppercase",
                    color: "var(--secondary)",
                  }}
                  size="small"
                />
                <TeritaryTypography name={new Date().toLocaleDateString()} />
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
