import { flexStyle } from "@/styles/commonStyles";
import { Box, Chip, Stack } from "@mui/material";
import React, { useState } from "react";
import VerticalLinearStepper from "./Stepper";
import {
  PrimaryTypography,
  TeritaryTypography,
} from "@/components/CustomTypography";
import GButton from "../GButton";
import DeploymentsCard from "@/components/dashboard/DeploymentsCard";
import PortFolioCardSkeleton from "@/components/dashboard/skeleton/PortFolioCardSkeleton";
import usePortfolioFunction from "@/hooks/functions/usePortfolioFunction";
import GInput from "../GInput";

type Props = {};

export default function Progress({}: Props) {
  const {
    handlePublish,
    publishLoading,
    portfolioBuilds,
    portfolioBuildsLoading,
  } = usePortfolioFunction({
    builds: true,
  });
  const [message, setmessage] = useState("");
  const [errorMsg, seterrorMsg] = useState("");
  const handleDeploy = () => {
    if (message) {
      handlePublish({ message });
      seterrorMsg("");
    } else {
      seterrorMsg("Message is required");
    }
  };
  return (
    <Stack
      sx={{
        padding: 2,
        gap: 2,
        borderRadius: "10px",
        alignItems: "flex-start",
        paddingX: 3,
        width: "400px",
        position: "relative",
        height: "80%",
        overflowY: "auto",
        backdropFilter: "blur(5px)",
        boxShadow: "0px 0px 2px 2px var(--secondary)",
        marginTop: 10,
        marginRight: 15,
        background: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {portfolioBuilds?.new && (
        <Stack sx={{ width: "100%" }}>
          <PrimaryTypography name={"Available Build"} />
          {portfolioBuildsLoading ? (
            <PortFolioCardSkeleton height={"80px"} />
          ) : (
            <Stack
              sx={{
                width: "100%",
                height: "110px",
                borderRadius: "10px",
                border: "2px dashed var(--text)",
                padding: 1,
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100px",
                  ...flexStyle("", "", "", "space-between"),
                }}
              >
                <Stack>
                  <PrimaryTypography
                    size="xs"
                    name={"New Build Available"}
                    variant="primary"
                  />
                  <TeritaryTypography
                    name={portfolioBuilds?.new?.time}
                    size="xs"
                    variant="teritary"
                  />
                </Stack>
                <GButton
                  lable="Deploy"
                  size={"small"}
                  variant="contained"
                  sx={{ borderRadius: "10px" }}
                  onClickHandler={handleDeploy}
                  loading={publishLoading}
                />
              </Box>
              <GInput
                name={"message"}
                value={message}
                onChangeHandler={(e: any) => {
                  setmessage(e.target.value);
                }}
                placeholder={"message"}
                type={"text"}
                height="30px"
                error={!!errorMsg}
                helperText={errorMsg}
              />
            </Stack>
          )}
        </Stack>
      )}
      <Box sx={{ width: "100%", ...flexStyle("column") }}>
        <PrimaryTypography name={"Previous Deployments"} />
      </Box>{" "}
      <Stack sx={{ width: "100%", gap: 1, height: "400px", overflowY: "auto" }}>
        {portfolioBuildsLoading ? (
          [1, 2, 3, 4].map((elem: any) => {
            return <PortFolioCardSkeleton key={elem} />;
          })
        ) : portfolioBuilds?.existing.length > 0 ? (
          portfolioBuilds?.existing?.map((elem: any) => {
            return (
              <DeploymentsCard
                time={elem?.time}
                date={elem?.date}
                day={elem?.day}
                message={elem?.message}
                key={elem._id}
              />
            );
          })
        ) : (
          <Box sx={{ height: "100%", width: "100%", ...flexStyle() }}>
            <TeritaryTypography name={"No deployments yet..."} />
          </Box>
        )}
      </Stack>
      {/* <VerticalLinearStepper /> */}
    </Stack>
  );
}
